import {
  Box,
  Title,
  Text,
  Container,
  Stack,
  Input,
  Select,
  Group,
  Switch,
  Grid,
  Menu,
  TextInput,
  Center,
} from "@mantine/core";
import { ArrowDown2, SearchNormal1 } from "iconsax-react";
import { useState } from "react";
import BrandsPage from "./components/renders/BrandsHome";
import MarketsPage from "./components/renders/MarketsHome";

export default function MarketHomeScreen() {
  let [showBrand, setPage] = useState(false);
  return (
    <Stack>
      <Box
        sx={{
          background: "blue",
          backgroundImage:
            "linear-gradient(to bottom, rgba(100, 100, 200, 0.7), #049ACE), url(https://previews.123rf.com/images/iamzews/iamzews2001/iamzews200100099/137163842-beautiful-young-african-woman-in-a-local-african-market-viewing-content-on-her-phone-looking-surpris.jpg)",
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
              <Title>Nigeria’s Largest Market Portal</Title>
              <Text>
                Search from over 15,000,000 products, from over 100,000 sellers
                for free!
              </Text>
            </Box>

            <Box>
              <SearchComp />
            </Box>

            <Center>
              <Group
                sx={{
                  backgroundColor: "#252B32",
                  borderRadius: 30,
                  color: "white",
                  width: 300,
                }}
                p="12px"
              >
                <Switch
                  color="teal"
                  checked={showBrand}
                  sx={{}}
                  onChange={(event) => setPage(event.currentTarget.checked)}
                />
                <Text>Switch to local markets page</Text>
              </Group>
            </Center>
          </Stack>
        </Container>
      </Box>

      {showBrand == true ? <BrandsPage /> : <MarketsPage />}

      <Box py="100px">
        <Container size="lg">
          <Grid>
            {[
              {
                icon: "receive-amount.svg",
                title: "Secure Trading",
                caption:
                  "Portal with trusted, hassle-free, frictionless market transaction assurance.",
              },
              {
                icon: "Support.svg",
                title: "24/7 Support",
                caption:
                  "Our customer care center is open 24/7 for a swift assistance.",
              },
              {
                icon: "Trade.svg",
                title: "Easy Trading",
                caption:
                  "Z Market platform is very going and in few seconds, you are done with your shoppings.",
              },
            ].map((element) => {
              return (
                <Grid.Col md={4}>
                  <Stack sx={{ textAlign: "center" }} align="center" px="24px">
                    <img
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
}

function SearchComp() {
  return (
    <div>
      <Box>
        <Grid
          sx={{ background: "white", padding: "4px 12px", borderRadius: 4 }}
        >
          <Grid.Col span={6} xs={6} sm={6} md={3}>
            <Select
              sx={{ flex: 0.5 }}
              data={[{ value: "ok", label: "ok" }]}
              variant="unstyled"
              placeholder="Select State"
              rightSection={<ArrowDown2 size={14} color="black" />}
            />
          </Grid.Col>
          <Grid.Col  span={6} xs={6} sm={6} md={3}>
            <Select
              sx={{ flex: 0.5 }}
              data={[{ value: "ok", label: "ok" }]}
              placeholder="Select Market"
              variant="unstyled"
              rightSection={<ArrowDown2 size={14} color="black" />}
            />
          </Grid.Col>

          <Grid.Col md={6}>
            <Input
              sx={{ flex: 1 }}
              placeholder="Search products, brands..."
              rightSection={<SearchNormal1 color="black" />}
              variant="unstyled"
            />
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  );
}
