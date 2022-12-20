import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Box,
  Group,
  Button,
  Container,
  Title,
} from "@mantine/core";
import { authManager } from "@store/account/auth";
import { User } from "iconsax-react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { CartWidget } from "../cart/CartWidget";
import Logo from "./logo.svg";

const MarketplaceHeader: React.FC<{
  setOpened: (data: any) => void;
  opened: boolean;
}> = ({ opened, setOpened }) => {
  let theme = useMantineTheme();
  return (
    <Header
      height={60}
      sx={(theme) => {
        return { borderBottom: "0px solid gray", boxShadow: theme.shadows.md };
      }}
    >
      <Container size={"lg"} sx={{ height: "100%" }}>
        <Group
          style={{ display: "flex", height: "100%" }}
          align="center"
          position="apart"
        >
          <Box
            sx={(theme) => {
              return {
                height: "100%",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              };
            }}
          >
            <Group>
              <Link to={"/"}>
                <img
                  src={require("./../../png/Store.png")}
                  style={{ height: 40 }}
                />
              </Link>
            </Group>
          </Box>

          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box>
              <Group position="center">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Contact Us", path: "/contact" },
                ].map((element) => {
                  return (
                    <Link
                      to={element.path}
                      style={{ textDecoration: "none", color: "#404040" }}
                    >
                      <Text>{element.label}</Text>
                    </Link>
                  );
                })}
              </Group>
            </Box>
          </MediaQuery>

          {authManager.status == "INITIAL" ? (
            <Group align={"center"}>
              <CartWidget />
              <Link to={"/login"}>
                <Button variant="light">Sign In</Button>
              </Link>
            </Group>
          ) : (
            <Group align={"center"}>
              <CartWidget />
              <Link to={"/account"}>
                <Button size="xs">
                  <User />
                </Button>
              </Link>
              {/*
                <Button>Account</Button>
               */}
            </Group>
          )}
        </Group>
      </Container>
    </Header>
  );
};

export default observer(MarketplaceHeader);
