import { Box, Grid } from "@mantine/core";
import { MarketCard } from "@ui/organisms/marketplace-widgets/MarketCard";
import { MainProductCard } from "../product-widgets/MainProductCard";
import { Carousel } from "@mantine/carousel";

import ProductCard from "../product-widgets/ProductCard";

export default function RenderProductsHoriz({
  useMainCard = true,
  products,
}: {
  useMainCard?: boolean;
  products?: any[];
}) {
  console.log(products);

  return (
    <Carousel
      withIndicators
      slideSize="25%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      {(products ?? []).map((element, index) => {
        return (
          <Carousel.Slide key={index}>
            <ProductCard product={element} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
