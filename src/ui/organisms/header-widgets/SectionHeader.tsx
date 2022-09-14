import { Divider, Box, Text, Group, Stack } from "@mantine/core";
import { } from "iconsax-react";



type SectionHeaderProps = {
    title: string;
    right?: React.ReactNode
}
export function SectionHeader({ title, right }: SectionHeaderProps) {
    return <Stack spacing={"sm"}>
        <Group position="apart" align={"center"}>
            <Text sx={{ fontWeight: "bold", color:'#183B56' }}>{title.toUpperCase()}</Text>
            {right}
        </Group>
        <Divider />
    </Stack>
}