import { useState } from "react";
import {
  Drawer,
  ActionIcon,
  Text,
  Center,
  useMantineTheme,
  Box,
  Stack,
  Button,
  Group,
  Divider,
  TextInput,
} from "@mantine/core";
import { Add, Minus, ShoppingBag, ShoppingCart, Verify } from "iconsax-react";
import { useTheme } from "@emotion/react";
import { cartManager } from "@store/cart";
import { observer } from "mobx-react";
import { CartItemCard } from "./CartItem";
import { HorizontalKeyValuePair } from "@ui/molecules/text";
import { formatCurrency, percentageOfANumber } from "../../../utils";
import { Locker } from "../../../sdk/catalog";
import { lockerApiController } from "../../../config/sdk";
import { showNotification } from "@mantine/notifications";
import { lockerManager } from "@store/utils/locker";
import { orderManager } from "@store/utils/order";

export const CartWidget = observer(() => {
  const [opened, setOpened] = useState(false);
  const [locker, setLocker] = useState<Locker>();
  const [pid, setPID] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const theme = useMantineTheme();

  let [step, setStep] = useState(1);

  function loadLocker() {
    setIsLoading(true);
    lockerApiController
      .lockerControllerGetLocker(pid)
      .then((res) => {
        console.log(res);
        //@ts-ignore
        if (res.data == "") {
          showNotification({ message: "Locker with PID does not exists" });
        } else {
          setLocker(res.data);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        showNotification({ message: "Locker Does not exists" });
        setIsLoading(false);
      });
  }

  let cartSumTotal = cartManager.items.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  const CartBag = (
    <Stack style={{  overflowY: "auto",height:"100%" }}>
      <Stack style={{ flex: 1 }}>
        <Box>
          {cartManager.items.map((e, index) => {
            return <CartItemCard e={e} key={index} />;
          })}
        </Box>
        {cartManager.items.length == 0 ? (
          <Stack sx={{ flex: 1, height: "100%" }} justify="center" py={"40px"}>
            <Center>
              <ShoppingCart
                size={100}
                variant="Bold"
                color={theme.primaryColor}
              />
            </Center>
            <Text sx={{ textAlign: "center" }}>
              You Shopping bag is empty...
            </Text>
          </Stack>
        ) : null}
      </Stack>
      {cartManager.items.length == 0 ? null : (
        <Button
          onClick={() => {
            setStep(2);
          }}
        >
          Checkout
        </Button>
      )}
    </Stack>
  );

  const CheckoutBag = (
    <Stack>
      <Stack sx={{ width: "100%" }}>
        {cartManager.items.map((e) => {
          return (
            <Box>
              <Group position="apart">
                <Text>
                  {e.name} x {e.quantity}
                </Text>
                <Text>{`${formatCurrency(e.price * e.quantity)}`}</Text>
              </Group>
            </Box>
          );
        })}
      </Stack>

      <Divider />

      <HorizontalKeyValuePair label="Platform Commission" value="5%" />

      <HorizontalKeyValuePair
        label="Sum Total"
        value={
          formatCurrency(cartSumTotal + percentageOfANumber(cartSumTotal, 5)) +
          ""
        }
      />

      <TextInput
        label="PID"
        onChange={(e) => {
          setPID(e.target.value);
        }}
        rightSection={
          <ActionIcon
            loading={isLoading}
            onClick={() => {
              loadLocker();
            }}
          >
            <Verify />
          </ActionIcon>
        }
      />

      {locker == undefined ? null : (
        <Box>
          <Stack
            sx={{
              background: "rgba(200,200,200,.2)",
              padding: 12,
              borderRadius: 4,
            }}
          >
            <HorizontalKeyValuePair
              label="Name"
              value={`${locker.last_name} ${locker.first_name} ${locker.middle_name}`}
            />
            <HorizontalKeyValuePair label="PID" value={`${locker.pid}`} />
            <HorizontalKeyValuePair label="Status" value={`${locker.status}`} />
          </Stack>
        </Box>
      )}
      <Box>
        <Button
          fullWidth
          loading={isLoading}
          disabled={locker == undefined}
          onClick={() => {
            orderManager.publishItem({
              items: cartManager.items.map((e) => {
                return {
                  amount: e.price,
                  image: e.image ?? "",
                  product_id: e.product_id,
                  product_name: e.name ?? "",
                  quantity: e.quantity,
                  total: 1,
                };
              }),
              //@ts-ignore
              locker_id: locker._id,
            });
            setStep(1);
            setOpened(false);
          }}
        >
          Proceed
        </Button>
      </Box>
    </Stack>
  );

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Shopping Bag"
        padding="xl"
        size="xl"
      >
        <Box style={{ height:"100%"  }}>
          {step == 1 ? CartBag : CheckoutBag}
        </Box>
      </Drawer>

      <ActionIcon
        onClick={() => {
          setOpened(true);
        }}
      >
        <ShoppingCart />

        <Center
          sx={{
            position: "absolute",
            top: -7,
            right: -7,
            borderRadius: 50,
            background: theme.colors.brown[5],
            width: 17,
            height: 17,
          }}
        >
          <Text color="white" sx={{ fontSize: 10 }}>
            {cartManager.items.length}
          </Text>
        </Center>
      </ActionIcon>
    </>
  );
});
