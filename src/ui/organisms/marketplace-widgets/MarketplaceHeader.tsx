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
  Button,
  Container,
} from "@mantine/core";
import { Link } from "react-router-dom";
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
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Stack align={"center"} justify="center" px="md">
              <Burger
                opened={opened}
                onClick={() => setOpened((o: any) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </Stack>
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box
              sx={(theme) => {
                return {
                  height: "100%",
                  width: "250px",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                };
              }}
              p="md"
            >
              <img src={Logo} alt="React Logo" style={{ height: 40 }} />
            </Box>
          </MediaQuery>

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

          <Box>
            <Group align={"center"}>
              <Link to={"/login"}>
                <Button variant="white">Signin</Button>
              </Link>
              <Link to={"/register"}>
                <Button>Become A Seller</Button>
              </Link>
            </Group>
          </Box>
        </Group>
      </Container>
    </Header>
  );
};

export default MarketplaceHeader;
