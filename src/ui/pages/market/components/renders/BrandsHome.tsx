import { Box, Container, Stack, Text } from "@mantine/core";
import RenderBrandCategoriesGrid from "./RenderBrandCategories";
import RenderBrandsGrid from "./RenderBrands";

export default function BrandsPage() {
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Container size="lg" py="32px">
          <Stack py={"24px"} spacing={"xl"}>
            <Text sx={{ fontWeight: "bold" }} mb="12px">
              BRAND CATEGORIES
            </Text>
            <RenderBrandCategoriesGrid />
          </Stack>
        </Container>
      </Box>
      <Box
        sx={(theme) => {
          return { textAlign: "center", background: theme.colors.blue[1] };
        }}
      >
        <Container size="lg" py="32px">
          <Stack py={"24px"} spacing={"xl"}>
            <Text sx={{ fontWeight: "bold" }} mb="12px">
              FEATURED BRANDS
            </Text>
            <RenderBrandsGrid />
          </Stack>
        </Container>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Container size="lg" py="32px">
          <Stack py={"24px"}>
            <Text sx={{ fontWeight: "bold" }} mb="12px">
              EXPLORE BRANDS
            </Text>
            <RenderBrandsGrid />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
