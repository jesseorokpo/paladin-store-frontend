import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { authManager } from "@store/account/auth";
import { lockerManager } from "@store/utils/locker";
import { orderManager } from "@store/utils/order";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { MainStatsCard } from "@ui/organisms/dashboard-widgets";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import ProductCard from "@ui/organisms/product-widgets/ProductCard";
import { Card, Document, LockCircle } from "iconsax-react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils";
import MainScreenHeader from "../organisms/screen-widgets/MainScreenHeader";

export const DashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"} justify="stretch" mt={"xl"}>
      <AccountOverview />
      <AccountOthers />
    </Stack>
  );
};

const AccountOverview = observer(() => {
  let completed_orders = orderManager.items.filter(
    (e) => e.payment_status == "completed"
  );

  console.log(completed_orders);
  let purchase_sum = completed_orders.reduce((a, b) => {
    //@ts-ignore
    return a + parseInt(b.sum_total);
  }, 0);
  return (
    <Paper
      p={"18px"}
      sx={(theme) => {
        return { width: "100%", background: "white" };
      }}
      shadow="md"
    >
      <Stack>
        <SectionHeader title="Account Activities" showBorder={false} />
        <Grid>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Orders"
              caption="this month"
              color="orange"
              icon={<Document variant="Bold" color="gray" />}
              value={orderManager.items.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Digital Lockers"
              caption="this month"
              color="orange"
              icon={<LockCircle variant="Bold" color="gray" />}
              value={lockerManager.items.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Expences"
              caption="this month"
              color="orange"
              icon={<Card variant="Bold" color="gray" />}
              value={formatCurrency(purchase_sum ?? 0)}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
});

const AccountOthers = observer(() => {
  let profile = authManager.user;
  return (
    <Paper
      p={"18px"}
      sx={(theme) => {
        return { width: "100%", background: "white" };
      }}
      shadow="md"
    >
      <Stack>
        <Grid>
          <Grid.Col md={12}>
            <Stack>
              <SectionHeader
                title="Profile"
                showBorder={false}
                right={
                  <Link to={"/account/profile"}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                }
              />

              <Grid>
                <Grid.Col md={2}>
                  <Avatar
                    size={"xl"}
                    src="https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf"
                  />
                </Grid.Col>
                <Grid.Col md={5}>
                  <VerticalKeyValuePair
                    label="First Name"
                    value={profile?.first_name}
                  />
                  <VerticalKeyValuePair
                    label="Last Name"
                    value={profile?.last_name}
                  />
                  <VerticalKeyValuePair label="Email" value={profile?.email} />
                </Grid.Col>
                <Grid.Col md={5}>
                  <VerticalKeyValuePair label="Phone" value={profile?.phone} />
                  <VerticalKeyValuePair label="Address" value="N/A" />
                  <VerticalKeyValuePair label="Gender" value="Male" />
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
});
