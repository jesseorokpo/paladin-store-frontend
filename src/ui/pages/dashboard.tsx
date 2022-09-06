import { Avatar, Box, Button, Container, Grid, Group, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { RenderStatsMain } from "@ui/organisms/dashboard-widgets/render-stats";
import MainScreenHeader from "../organisms/screen-widgets/MainScreenHeader";

export const DashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"} justify="stretch">
      <MainScreenHeader title="Dashboard" />
      <AccountOverview />
    </Stack>
  );
};

function AccountOverview() {
  return <Paper p={"18px"} sx={theme => {
    return { width: "100%", background: "ghostwhite" }
  }} shadow="md">
    <Stack>
      <Box sx={theme => {
        return { borderRadius: 10, background: "white", border: "2px solid rgba(0, 0, 0, 0.16)", }
      }} p="12px">
        <Group>
          <Avatar size={"xl"} />
          <Box sx={{ flex: 1 }}>
            <Text sx={{ fontWeight: "bold" }}>Emekus Emekus  Enterprise</Text>
            <Text color={"gray"}>Shop 12B, Block 12, Balogun Shopping Plaza, Balogun, Lagos Island, Lagos</Text>
            <Text color={"dimmed"}>Last log in: 4 minutes ago</Text>
          </Box>
          <Box sx={{ flex: .7 }}>
            <RenderStatsMain stats={[{ label: "0", value: "Ads" },
            { label: "0", value: "Stores" }]} />
          </Box>
        </Group>
      </Box>

      <Box sx={theme => {
        return { borderRadius: 10, border: "2px solid rgba(0, 0, 0, 0.16)", background: "white" }
      }} p="12px">
        <Stack>
          <RenderStatsMain stats={[{ label: "Page Views", value: "12,460" },
          { label: "Orders", value: "427" }, { label: "Today’s Sales (NGN)", value: "250,500" },
          { label: "Earnings (NGN)", value: "4,460,250" }]} />

          <Text sx={(theme) => {
            return {
              textAlign: "center", padding: 8, background: theme.colors.blue[2],
              borderRadius: 8
            }
          }} >
            Orders
          </Text>



          <Button variant="outline">
            View All
          </Button>
        </Stack>
      </Box>
    </Stack>

  </Paper>
}