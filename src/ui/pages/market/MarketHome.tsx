import { Box, Title, Text, Container, Stack } from "@mantine/core";

export default function MarketHomeScreen() {
    return <Stack>
        <Box sx={{ background: "blue" }}>
            <Container size="lg" sx={{
                minHeight: "50vh",
            }}>
                <Stack py={"24px"} justify="center" align={"center"} sx={{ minHeight: "100%" }}>
                    <Title>Nigeria’s Largest Market Portal</Title>
                    <Text>Search from over 15,000,000 products, from over 100,000 sellers for free!</Text>
                </Stack>
            </Container>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
            <Container size="lg">
                <Stack py={"24px"}>
                    <Text>Brand Categories</Text>
                </Stack>
            </Container>
        </Box>
        <Box sx={theme=>{
            return { textAlign: 'center', background:theme.colors.blue[1] }
        }}>
            <Container size="lg">
                <Stack py={"24px"}>
                    <Text>Featured Brands</Text>
                </Stack>
            </Container>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
            <Container size="lg">
                <Stack py={"24px"}>
                    <Text>Explore Brands</Text>
                </Stack>
            </Container>
        </Box>
    </Stack>
}