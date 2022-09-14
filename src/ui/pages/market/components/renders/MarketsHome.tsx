import { Box, Button, Container, Divider, Group, Stack, Text } from "@mantine/core";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import RenderBrandCategoriesGrid from "./RenderBrandCategories";
import RenderBrandsGrid from "./RenderBrands";
import RenderMarketsGrid from "./RenderMarkets";
import RenderShopsGrid from "./RenderShops";

export default function MarketsPage() {
    return <Stack spacing={"xl"} sx={{background:"ghostwhite"}} py="24px">

        <Box sx={theme => {
            return {}
        }}>
            <Container size="lg"  sx={{backgroundColor:"white"}}>
                <Stack py={"24px"} spacing="xl">
                    <SectionHeader title="FEATURED SHOPS" />
                    <RenderShopsGrid />
                </Stack>
            </Container>
        </Box>

        <Box sx={{}}>
            <Container size="lg" py="32px"  sx={{backgroundColor:"white"}}>
                <Stack py={"24px"} spacing="xl">
                    <SectionHeader title="POPULAR MARKETS" />
                    <RenderMarketsGrid />
                </Stack>
            </Container>
        </Box>


        <Box sx={{}}>
            <Container size="lg" py="32px"  sx={{backgroundColor:"white"}}>
                <Stack py={"24px"} spacing="xl">

                    <SectionHeader title="EXPLORE MARKETS"
                        right={<Button variant="white" p={"0px"}>
                            See All
                        </Button>} />

                    <RenderMarketsGrid />
                </Stack>
            </Container>
        </Box>
    </Stack>
}