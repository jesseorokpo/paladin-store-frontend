import { Box, Button, Group, Input, Paper, Stack, Table, Title, Text } from "@mantine/core";

import MainScreenHeader from "@ui/organisms/screen-widgets/MainScreenHeader";

export default function InvoicesScreen() {
    return <Box style={{ overflow: "hidden !important" }}>
        <Stack>

            <InvoicesOverview />
        </Stack>
    </Box>
}


function InvoicesOverview() {
    const rows = [1, 2, 3, 4, 4].map((element) => (
        <tr key={element} style={{ border: "0px solid black" }}>
            <td>{"449012246AD"}</td>
            <td>{"Jonathan"}</td>
            <td>{"03-Sep-2022"}</td>
            <td>{"132,000"}</td>
            <td>{"Not Delivered"}</td>
            <td><Button>Promote</Button></td>
        </tr>
    ));

    return <Paper p={"18px"} sx={theme => {
        return { width: "100%", background: "white" }
    }} shadow="md">
        <Stack>
            <Group position="apart" >
                <Box>
                    <Title sx={{ fontSize: 24 }}>
                        Invoice
                    </Title>
                </Box>
                <Button>
                    Create Invoice
                </Button>
            </Group>

            <Stack sx={theme => {
                return {
                    padding: 12,
                    borderRadius: 10, background: "white", border: "2px solid rgba(0, 0, 0, 0.16)",
                }
            }}>


                <Group position="apart" spacing={"xl"}>
                    <Box sx={{ flex: 1 }}>

                    </Box>
                </Group>


                <Table border={0}>
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Buyer’s Name</th>
                            <th>Payment Date</th>
                            <th>Amount (N)</th>
                            <th>Delivery Status</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Stack>
        </Stack>

    </Paper>
}