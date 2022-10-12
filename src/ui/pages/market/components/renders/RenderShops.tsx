import {
  Avatar,
  Box,
  Center,
  Divider,
  Grid,
  Group,
  MediaQuery,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { IconBrandShopee, IconBuildingStore } from "@tabler/icons";
import { Shop, Verify } from "iconsax-react";

const brands = [
  {
    title: "Fashion",
    captiton: "12 Brands",
  },
  {
    title: "Gadgets",
    captiton: "12 Brands",
  },
  {
    title: "Automobile",
    captiton: "12 Brands",
  },
  {
    title: "Fashion",
    captiton: "12 Brands",
  },
];

export default function RenderShopsGrid() {
  return (
    <Box>
      <Box>
        <Grid gutter={"xl"}>
          {brands.map((element) => {
            return (
              <Grid.Col span={6} xs={6} sm={4} md={4} lg={3} xl={3}>
                <Paper withBorder sx={{ overflow: "hidden" }}>
                  <Box>
                    <Box
                      sx={{
                        paddingTop: "70%",
                        backgroundColor: "#FEF7E7",
                        position: "relative",
                      }}
                    >
                      <Box sx={{ position: "absolute", top: 12, left: 12 }}>
                        <Verify variant="Bold" color="#2ADF3C" />
                      </Box>

                      <Center
                        p={"8px"}
                        sx={{
                          borderRadius: 50,
                          position: "absolute",
                          bottom: -13,
                          right: 12,
                          background: "#00B2F0",
                        }}
                      >
                        <IconBuildingStore color="white" size={18} />
                      </Center>
                    </Box>
                  </Box>
                  <Stack spacing={"xs"} sx={{ flex: 1 }} px="12px" py="12px">
                    <Box>
                      <Text sx={{ fontWeight: "bold", color: "#183B56" }}>
                        Bolade Beauty Shop
                      </Text>
                      <Text sx={{ color: "#183B56" }}>
                        Oshodi Market, Lagos
                      </Text>
                    </Box>
                    <Divider color={"ghostwhite"} />

                    <MediaQuery
                      smallerThan="sm"
                      styles={{
                        display: "none",
                        background: "orange",
                      }}
                    >
                      <Text size={"sm"} sx={{ color: "#183B56" }}>
                        The best beauty product shop with cheap price
                      </Text>
                    </MediaQuery>
                  </Stack>
                </Paper>
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
