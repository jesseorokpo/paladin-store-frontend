import { Box, Title, Text, Container } from "@mantine/core";

export const RenderPlatformBanner = () => {
  return (
    <Box sx={{ background: "#482919", marginBottom: 24 }}>
      <Container>
        <Box py={32} sx={{ textAlign: "center", color: "white" }}>
          <Title>Paladin Ecommerce</Title>
          <Text>Keep your school provisions organized and accessible with the SP student locker.</Text>
        </Box>
      </Container>
    </Box>
  );
};
