import { Box, Title, Text, Container } from "@mantine/core";

export const RenderPlatformBanner = () => {
  return (
    <Box sx={{ background: "#049ACE", marginBottom: 24 }}>
      <Container>
        <Box py={32} sx={{ textAlign: "center", color: "white" }}>
          <Title>Nigeria's Largest Market Portal</Title>
          <Text>
            Search from over 15,000,000 products, from over 100,000 sellers for
            free!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
