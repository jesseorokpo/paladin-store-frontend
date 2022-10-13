import { Box, Container, Stack } from "@mantine/core";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";
import RenderShopsGrid from "../components/renders/RenderShops";

export const MarketHomeScreen = () => {
  return (
    <Box>
      <RenderPlatformBanner />

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader title="Featured Shops" />
            <RenderShopsGrid />
          </Stack>
        </Container>
      </Box>

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader title="All Shops" />
            <RenderShopsGrid />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
