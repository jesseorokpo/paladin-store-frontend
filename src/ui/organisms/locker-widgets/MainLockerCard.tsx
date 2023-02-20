import {
  Paper,
  Stack,
  Divider,
  MediaQuery,
  Box,
  Text,
  Center,
  Title,
  Group,
  Avatar,
  Grid,
  Button,
} from "@mantine/core";
import { IconBuildingStore } from "@tabler/icons";
import { HeartRemove, HeartSlash, Verify } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { Locker } from "../../../sdk/catalog";
import { formatCurrency } from "../../../utils";

export const MainLockerCard = ({ locker }: { locker: Locker }) => {
  let navigate = useNavigate();
  return (
    <Paper
      withBorder
      sx={{ overflow: "hidden" }}
      onClick={() => {
        //@ts-ignore
        navigate(`/account/lockers/${locker._id}`);
      }}
      px={14}
    >
      <Grid align={"stretch"} py="md">
        <Grid.Col md={2}>
          <Avatar size={"lg"} src={locker.photo}/>
        </Grid.Col>
        <Grid.Col md={10}>
          <Group sx={{}}>
            <Stack spacing={"xs"} sx={{ flex: 1, width: "100%" }}>
              <Box>
                <Title size={"md"} color="#183B56">
                  {locker.first_name} {locker.last_name}
                </Title>
                <Text size={"sm"} sx={{ color: "#183B56" }}>
                  PI: {locker.pid}
                </Text>
              </Box>
            </Stack>
            <Button>View</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
