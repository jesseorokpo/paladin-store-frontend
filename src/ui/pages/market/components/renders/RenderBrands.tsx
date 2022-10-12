import { Avatar, Box, Grid, Group, Stack, Text } from "@mantine/core";

const brands = [{
    title: 'Fashion',
    captiton: '12 Brands'
}, {
    title: 'Gadgets',
    captiton: '12 Brands'
}, {
    title: 'Automobile',
    captiton: '12 Brands'
}, {
    title: 'Fashion',
    captiton: '12 Brands'
}, {
    title: 'Gadgets',
    captiton: '12 Brands'
}, {
    title: 'Automobile',
    captiton: '12 Brands'
}, {
    title: 'Gadgets',
    captiton: '12 Brands'
}, {
    title: 'Automobile',
    captiton: '12 Brands'
},]



export default function RenderBrandsGrid() {
    return <Box>
        <Box>
            <Grid gutter={"xl"}>
                {brands.map(element => {
                    return <Grid.Col span={6}  xs={6} sm={6} md={3}>
                        <Stack align={"stretch"} sx={{}}>
                            <Box px="12px" pt="12px">
                                <Box sx={{
                                    paddingTop: "100%", backgroundColor: "orange",
                                    borderRadius: 500, backgroundImage: 'url(https://cdn.dribbble.com/users/5917891/screenshots/16231517/media/6f191703667b67283bdfe386a1412782.jpg?compress=1&resize=400x300)'
                                }}>
                                </Box>
                            </Box>
                            <Box sx={{ flex: 1, textAlign: "center" }}>
                                <Text sx={{ fontWeight: "bold" }}>{element.title}</Text>
                                <Text>@lamborghini.ng</Text>
                            </Box>
                        </Stack>
                    </Grid.Col>
                })}
            </Grid>
        </Box>
    </Box>
}