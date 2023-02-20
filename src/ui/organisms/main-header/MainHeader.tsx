import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Box,
  Stack,
  Title,
  Group,
  Input,
  Avatar,
  Menu,
  Button,
  ActionIcon,
} from "@mantine/core";
import { authManager } from "@store/account/auth";
import { IconNotification, IconSearch } from "@tabler/icons";
import LogoColoredSvgComponent from "@ui/svg/LogoColored";
import {
  CardTick,
  Message,
  Notification,
  ShoppingBag,
  ShoppingCart,
} from "iconsax-react";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { CartWidget } from "../cart/CartWidget";
import Logo from "./logo.svg";

const MainHeader: React.FC<{
  setOpened: (data: any) => void;
  opened: boolean;
}> = ({ opened, setOpened }) => {
  let theme = useMantineTheme();

  const BRANDLOGO = (
    <Box
      sx={(theme) => {
        return {
          height: "100%",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        };
      }}
      p="md"
    >
      <Link to={"/"}>
        <img src={require("./../../png/Store.png")} style={{ height: 40 }} />
      </Link>
    </Box>
  );
  return (
    <Header
      height={60}
      sx={(theme) => {
        return {
          borderBottom: "0px solid gray",
          boxShadow: theme.shadows.md,
          zIndex: 200,
        };
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <Box
          px="md"
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o: any) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
            />
          </MediaQuery>
          {BRANDLOGO}
        </Box>
        <Group
          align={"center"}
          spacing="xl"
          sx={{ justifyContent: "space-between", flex: 1 }}
        >
          <Box></Box>
          <Box>
            <Group spacing={"xs"} pr="md">
              <CartWidget />
              <UserPrimaryActions />
            </Group>
          </Box>
        </Group>
      </div>
    </Header>
  );
};

const UserPrimaryActions = observer(() => {
  let profile = authManager.user;
  return (
    <Menu width={"280px"}>
      <Menu.Target>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          }
          size="md"
          radius={"xl"}
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Stack align={"center"} p="12px">
          <Avatar
            size={"lg"}
            sx={{ borderRadius: 50 }}
            src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          />
          <Box sx={{ textAlign: "center" }}>
            <Text sx={{ fontWeight: "bold" }}>
              {profile?.first_name}, {profile?.last_name}
            </Text>
            <Text>{profile?.email}</Text>
          </Box>

          <Group>
            <Button variant="outline">Edit Profile</Button>
            <Button
              variant="outline"
              color={"red"}
              onClick={() => {
                localStorage.clear();
                runInAction(() => {
                  authManager.status = "INITIAL";
                });
                authManager.init();
              }}
            >
              Sign Out
            </Button>
          </Group>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
});

export default MainHeader;
