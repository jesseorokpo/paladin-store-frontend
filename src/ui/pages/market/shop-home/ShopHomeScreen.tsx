import { Box, Container, Stack } from "@mantine/core";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";
import RenderMarketsGrid from "../components/renders/RenderMarkets";

export const ShopHomeScreen = () => {
  return (
    <Box>
      <RenderPlatformBanner />

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader title="Featured Products" />
            <RenderMarketsGrid />
          </Stack>
        </Container>
      </Box>

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader title="All Products" />
            <RenderMarketsGrid />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
