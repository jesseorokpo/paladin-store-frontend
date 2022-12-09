import { Box, Grid, Group, Paper, Stack, Title } from "@mantine/core";
import { lockerManager } from "@store/utils/locker";
import { MainLockerCard } from "@ui/organisms/locker-widgets/MainLockerCard";
import { NewLockerProcess } from "@ui/organisms/processes/new-locker-process";
import { MainProductCard } from "@ui/organisms/product-widgets/MainProductCard";
import { observer } from "mobx-react";

export default observer(function LockersScreen() {
  return (
    <Box style={{ overflow: "hidden !important" }} mt="xl">
      <Stack>
        <Paper
          p={"18px"}
          sx={(theme) => {
            return { width: "100%", background: "white" };
          }}
          shadow="md"
        >
          <Stack>
            <Group position="apart">
              <Box>
                <Title sx={{ fontSize: 24 }}>Digital Lockers</Title>
              </Box>
              <NewLockerProcess />
            </Group>

            <Grid>
              {lockerManager.items.map((element, index) => {
                return (
                  <Grid.Col md={6} key={index}>
                    <MainLockerCard locker={element} />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
});
