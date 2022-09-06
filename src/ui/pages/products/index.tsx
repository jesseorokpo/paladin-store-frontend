import { Box, Button, Group, Stack } from "@mantine/core";

import MainScreenHeader from "@ui/organisms/screen-widgets/MainScreenHeader";

export default function ProductsScreen() {
    return <Box style={{ overflow: "hidden !important" }}>
        <Stack>
            <MainScreenHeader title="Products" />
        </Stack>
    </Box>
}