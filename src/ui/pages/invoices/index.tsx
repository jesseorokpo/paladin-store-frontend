import { Box, Button, Group, Stack } from "@mantine/core";

import MainScreenHeader from "@ui/organisms/screen-widgets/MainScreenHeader";

export default function InvoicesScreen() {
    return <Box style={{ overflow: "hidden !important" }}>
        <Stack>
            <MainScreenHeader title="Invoices" />
        </Stack>
    </Box>
}