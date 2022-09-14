import { Avatar, Badge, Box, Button, Container, Grid, Group, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { RenderStatsMain } from "@ui/organisms/dashboard-widgets/render-stats";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import ProductCard from "@ui/organisms/product-widgets/ProductCard";
import MainScreenHeader from "../organisms/screen-widgets/MainScreenHeader";

export const DashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"} justify="stretch">
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
      }} p="24px">
        <Group>
          <Avatar size={"xl"} />
          <Box sx={{ flex: 1 }}>
            <Text sx={{ fontWeight: "bold" }}>Emekus Emekus  Enterprise</Text>
            <Text color={"gray"}>Shop 12B, Block 12, Balogun Shopping Plaza, Balogun, Lagos Island, Lagos</Text>
            <Text color={"dimmed"}>Last log in: 4 minutes ago</Text>
          </Box>
          <Box sx={{ flex: .7 }}>
            <RenderStatsMain stats={[{ label: "Ads", value: "0" },
            { label: "Stores", value: "0" }]} />
          </Box>
        </Group>
      </Box>

      <Box sx={theme => {
        return { borderRadius: 10, border: "2px solid rgba(0, 0, 0, 0.16)", background: "white" }
      }} p="24px">
        <Stack>
          <RenderStatsMain stats={[{ label: "Page Views", value: "12,460" },
          { label: "Orders", value: "427" }, { label: "Today’s Sales (NGN)", value: "250,500" },
          { label: "Earnings (NGN)", value: "4,460,250" }]} />



          <SectionHeader title="Orders" showBorder={false} right={<Button variant="white" style={{}}>
            View All
          </Button>} />


          <Stack>

            {[1, 2, 2, 4].map(element => {
              return <Box>
                <Group px="0px">
                  <Box sx={{ flex: 1 }}>
                    <Text sx={{ fontWeight: "bold" }}>Order Description here</Text>
                    <Text>24/08/2022</Text>
                  </Box>

                  <Group sx={{ flex: 1 }} position="apart">
                    <Badge size="lg">Pending</Badge>
                    <Button variant="outline">Details</Button>
                  </Group>
                </Group>
              </Box>
            })}
          </Stack>

        </Stack>
      </Box>



      <SectionHeader title="Reviews" showBorder={false} right={<Button variant="white" style={{ backgroundColor: "transparent" }}>
        View All Reviews
      </Button>} />

      <Box>

        <Box sx={theme => {
          return { borderRadius: 10, border: "2px solid rgba(0, 0, 0, 0.16)", background: "white" }
        }} p="24px">

          <Grid>
            <Grid.Col md={6}>

            </Grid.Col>
            <Grid.Col md={6}>

            </Grid.Col>
          </Grid>
        </Box>
      </Box>



      <SectionHeader title="Most Viewed Products" showBorder={false} right={<Button style={{}}>
        Add New Product
      </Button>} />

      <Box>

        <Box sx={theme => {
          return { borderRadius: 10, border: "2px solid rgba(0, 0, 0, 0.16)", background: "white" }
        }} p="24px">

          <Grid>
            {[1, 2, 3, 4].map(element => {
              return <Grid.Col md={3}>
                <ProductCard />
              </Grid.Col>
            })}
          </Grid>
        </Box>
      </Box>



    </Stack>

  </Paper>
}