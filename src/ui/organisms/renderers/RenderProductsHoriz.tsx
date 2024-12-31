import { Box, Grid } from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import ProductCard from "../product-widgets/ProductCard";

export default function RenderProductsHoriz({
  useMainCard = true,
  products,
}: {
  useMainCard?: boolean;
  products?: any[];
}) {

  return (
    <Carousel
      withIndicators
      // slideSize="25%"
      // slideGap="md"
      // loop
      // align="start"
      // slidesToScroll={3}
      // breakpoints={[
      //   { maxWidth: 'md', slideSize: '50%' },
      //   { maxWidth: 'sm', slideSize: '100%', slideGap: 8 },
      // ]}
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