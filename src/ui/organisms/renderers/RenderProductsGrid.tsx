import { Box, Grid } from "@mantine/core";
import { MarketCard } from "@ui/organisms/marketplace-widgets/MarketCard";
import { MainProductCard } from "../product-widgets/MainProductCard";
import ProductCard from "../product-widgets/ProductCard";

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

export default function RenderProductsGrid({
  useMainCard = true,
}: {
  useMainCard?: boolean;
}) {
  return (
    <Box>
      <Box>
        <Grid gutter={"xl"}>
          {brands.map((element) => {
            return (
              <Grid.Col span={6} xs={6} sm={4} md={4} lg={3} xl={3}>
                {useMainCard == true ? <MainProductCard /> : <ProductCard />}
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
