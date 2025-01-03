import {
  Box,
  Title,
  Text,
  Container,
  Stack,
  Grid,
  Button,
} from "@mantine/core";
import { dataManager } from "@store/data";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import RenderProductsGrid from "@ui/organisms/renderers/RenderProductsGrid";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

export default observer(function PlatformHomeScreen() {
  let navigate = useNavigate();
  return (
    <Stack>
      <Box
        sx={{
          background: "blue",
          //link to background image https://i.imgur.com/IVDLxMd.jpg
          backgroundImage:
            "linear-gradient(to bottom, rgb(222, 190, 162,.5), rgb(85, 55, 37)), url(https://i.imgur.com/IVDLxMd.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container size="md" sx={{}}>
          <Stack
            spacing={"xl"}
            py={"24px"}
            justify="center"
            align={"stretch"}
            sx={{ minHeight: "60vh", color: "whitesmoke", textAlign: "center" }}
          >
            <Box>
              <Title>School Paladmin Commerce</Title>
              <Text>
                Explore wide range of products from our store
              </Text>
            </Box>

            <Box>
              <Button
                color={"orange"}
                sx={{ borderRadius: 0 }}
                size="lg"
                onClick={() => {
                  navigate("/explore");
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader
              title="Popular Products"
              showBorder={false}
              right={
                <Button
                  variant="subtle"
                  onClick={() => {
                    navigate("/explore");
                  }}
                >
                  VIEW MORE
                </Button>
              }
            />
            <RenderProductsGrid products={dataManager.products.slice(0, 6)} />
          </Stack>
        </Container>
      </Box>

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader
              title="Trending Products"
              showBorder={false}
              right={
                <Button
                  variant="subtle"
                  onClick={() => {
                    navigate("/explore");
                  }}
                >
                  VIEW MORE
                </Button>
              }
            />
            <RenderProductsGrid
              useMainCard={true}
              products={dataManager.products.slice(0, 4)}
            />
          </Stack>
        </Container>
      </Box>

      <Box py="100px">
        <Container size="lg">
          <Grid>
            {[
              {
                icon: "receive-amount.svg",
                title: "Lorem Ipsum",
                caption:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quo aut, debitis ipsum, voluptate velit.",
              },
              {
                icon: "Support.svg",
                title: "24/7 Support",
                caption:
                  "Our customer care center is open 24/7 for a swift assistance.",
              },
              {
                icon: "Trade.svg",
                title: "Lorem Ipsum",
                caption:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quo aut, debitis ipsum, voluptate velit.",
              },
            ].map((element) => {
              return (
                <Grid.Col md={4}>
                  <Stack sx={{ textAlign: "center" }} align="center" px="24px">
                    <img alt=""
                      width={100}
                      src={require(`./../../molecules/graphics/${element.icon}`)}
                    />
                    <Text sx={{ fontWeight: "bold" }}>{element.title}</Text>
                    <Text>{element.caption}</Text>
                  </Stack>
                </Grid.Col>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
});
