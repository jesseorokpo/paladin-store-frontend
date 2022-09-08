import { Avatar, Box, Button, Checkbox, Group, Input, Paper, Stack, Table, Text, Title } from "@mantine/core";
import { RenderStatsMain } from "@ui/organisms/dashboard-widgets/render-stats";

import MainScreenHeader from "@ui/organisms/screen-widgets/MainScreenHeader";
import { Filter } from "iconsax-react";

export default function ProductsScreen() {
    return <Box style={{ overflow: "hidden !important" }}>
        <Stack>
            <ProductsOverview />
        </Stack>
    </Box>
}

function ProductsOverview() {

    const rows = [1, 2, 3, 4, 4].map((element) => (
        <tr key={element} style={{ border: "0px solid black" }}>
            <td><Checkbox /></td>
            <td>{element}</td>
            <td><Avatar src={"https://advergizefiles-bragboxx.netdna-ssl.com/wp-content/uploads/RAW_Pepsico-770x515.jpg"} /></td>
            <td>{"10436AD"}</td>
            <td>{"52” LG OLED Smart Television with WiFi, Netf..."}</td>
            <td>{"43"}</td>
            <td>{"325,000"}</td>
            <td>{"13,975,000"}</td>
            <td><Button>Promote</Button></td>

        </tr>
    ));


    return <Paper p={"18px"} sx={theme => {
        return { width: "100%", background: "white" }
    }} shadow="md">
        <Stack>
            <Group position="apart">
                <Box>
                    <Title sx={{ fontSize: 24 }}>
                        Products <small>(4,336)</small>
                    </Title>
                    <Text>Last updated: 30 August, 2022</Text>
                </Box>
                <Button>
                    Add Product
                </Button>
            </Group>
            
            <Group position="apart" spacing={"xl"}>
                <Box sx={{ flex: 1 }}>
                    <Input variant="filled" sx={{ flex: 1 }} placeholder="Search" />
                </Box>

                <Box>
                    <Group>
                        <Text>Sort by: Product ID</Text>
                    </Group>
                </Box>
            </Group>

            <Stack sx={theme => {
                return {
                    padding: 12,
                    borderRadius: 10, background: "white", border: "2px solid rgba(0, 0, 0, 0.16)",
                }
            }}>





                <Table border={0}>
                    <thead>
                        <tr>
                            <th><Checkbox /></th>
                            <th>S/N</th>
                            <th>Image</th>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Inventory Value</th>
                            <th>Ad Promotion</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Stack>
        </Stack>
    </Paper>
}