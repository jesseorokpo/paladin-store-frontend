import {
  Paper,
  Stack,
  Box,
  Text,
  Center,
  Title,
  Group,
  Avatar,
  Grid,
  Button,
  ActionIcon,
} from "@mantine/core";
import { HeartRemove, HeartSlash, Lock, Lock1, Verify } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { OrderItem } from "../../../sdk/catalog";
import { formatCurrency } from "../../../utils";

export const AssetCard = ({ item }: { item: OrderItem }) => {
  let navigate = useNavigate();
  return (
    <Paper withBorder sx={{ overflow: "hidden" }} onClick={() => {}} px={14}>
      <Grid align={"stretch"} py="md">
        <Grid.Col md={2}>
          <Avatar size={"lg"} src={item.image} />
        </Grid.Col>
        <Grid.Col md={10}>
          <Group sx={{}}>
            <Stack spacing={"xs"} sx={{ flex: 1, width: "100%" }}>
              <Box>
                <Title size={"md"} color="#183B56">
                  {item.product_name}
                </Title>
                <Text size={"sm"} sx={{ color: "#183B56" }}>
                  {item.quantity} Items in locker worth{" "}
                  {formatCurrency(item.quantity * item.amount)}
                </Text>
              </Box>
            </Stack>
            <Stack>
              {/* <ActionIcon>
                <Lock1 />
              </ActionIcon> */}
            </Stack>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
