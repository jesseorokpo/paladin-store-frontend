import { useTheme } from "@emotion/react";
import { Box, Grid, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { EmptyWallet, People, Profile2User, ProfileTick } from "iconsax-react";
import React from "react";
import { MainStatsCard } from "../organisms/dashboard-widgets";
import MainScreenHeader from "../organisms/screen-widgets/MainScreenHeader";
export const DashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"}>
      <MainScreenHeader title="Dashboard" />
      <Box my={32}>

      </Box>
    </Stack>
  );
};
