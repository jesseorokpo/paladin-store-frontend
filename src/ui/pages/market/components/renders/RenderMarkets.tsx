import {
  Avatar,
  Box,
  Divider,
  Grid,
  Group,
  MediaQuery,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

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
  {
    title: "Gadgets",
    captiton: "12 Brands",
  },
  {
    title: "Automobile",
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
];

export default function RenderMarketsGrid() {
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
                        paddingTop: "80%",
                        backgroundColor: "#D3F4FF",
                      }}
                    ></Box>
                  </Box>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    <Stack px="12px" spacing={"xs"} py="12px">
                      <Box>
                        <Text sx={{ fontWeight: "bold" }}>Idumota Market</Text>
                        <Text>Rivers State</Text>
                      </Box>
                      <Divider color={"ghostwhite"} size="xs" />

                      <MediaQuery
                        smallerThan="sm"
                        styles={{
                          display: "none",
                        }}
                      >
                        <Text sx={{ fontSize: 12 }}>
                          35 Total Sellers & 26 Total Products
                        </Text>
                      </MediaQuery>
                    </Stack>
                  </Box>
                </Paper>
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
