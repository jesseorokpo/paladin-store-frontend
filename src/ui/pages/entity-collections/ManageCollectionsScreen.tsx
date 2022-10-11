import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  Paper,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { RenderStatsMain } from "@ui/organisms/dashboard-widgets/render-stats";

import MainScreenHeader from "@ui/organisms/screen-widgets/MainScreenHeader";
import { Filter } from "iconsax-react";

export default function ManageCollectionsScreen() {
  return (
    <Box style={{ overflow: "hidden !important" }}>
      <Stack>
        <CollectionsOverview />
      </Stack>
    </Box>
  );
}

function CollectionsOverview() {
  const rows = [1, 2, 3, 4, 4].map((element) => (
    <tr key={element} style={{ border: "0px solid black" }}>
      <td>
        <Checkbox />
      </td>
      <td>{element}</td>
      <td>
        <Avatar
          src={
            "https://advergizefiles-bragboxx.netdna-ssl.com/wp-content/uploads/RAW_Pepsico-770x515.jpg"
          }
        />
      </td>
      <td>Collection Title</td>
      <td>10 Products</td>
      <td>
        <Button variant="outline" color="red">
          Edit
        </Button>
      </td>
    </tr>
  ));

  return (
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
            <Title sx={{ fontSize: 24 }}>Collections</Title>
          </Box>
          <Button>Add Collection</Button>
        </Group>

        <Stack
          sx={(theme) => {
            return {
              padding: 12,
              borderRadius: 10,
              background: "white",
              border: "2px solid rgba(0, 0, 0, 0.16)",
            };
          }}
        >
          <Table border={0}>
            <thead>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>S/N</th>
                <th>Image</th>
                <th>Title</th>
                <th>Product count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Stack>
      </Stack>
    </Paper>
  );
}
