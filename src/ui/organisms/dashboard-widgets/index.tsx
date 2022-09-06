import { Badge, Box, Group, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core"
import { IconUser } from "@tabler/icons"



type MainStatsCardProps = {
    label: string;
    value: string;
    caption: string;
    color: string;
    icon: React.ReactNode
}
export function MainStatsCard({ caption, label, value, color, icon }: MainStatsCardProps) {
    let theme = useMantineTheme()
    return <Paper p="18px" pl={20} sx={{
        borderLeft: `2px solid ${color}`
    }}>
        <Box>
            <Stack spacing={4}>
                <Group position="apart" align={"flex-start"}>
                    <Box>
                        <Text size={"sm"}>
                            {label}
                        </Text>
                        <Title sx={{ fontSize: "28px", color: 'white' }}>
                            {value}
                        </Title>
                    </Box>
                    {icon}
                </Group>
                <Text size={"sm"}>
                    {caption}
                </Text>
                <Group>
                    <Badge sx={{ background: theme.colors.darkBlue[5], fontWeight: 400, color: "#D2B44A" }} radius="sm">105 Inactive</Badge>
                    <Badge sx={{ background: theme.colors.darkBlue[5], fontWeight: 400, color: "#5EEBA7" }} radius="sm">225 Active</Badge>
                </Group>
            </Stack>
        </Box>
    </Paper>
}