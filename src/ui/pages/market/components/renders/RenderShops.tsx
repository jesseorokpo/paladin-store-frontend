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
import { ShopCard } from "@ui/organisms/shop-widgets/ShopCard";
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
                <ShopCard />
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
