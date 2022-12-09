import {
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  ActionIcon,
  Divider,
  Grid,
} from "@mantine/core";
import { orderManager } from "@store/utils/order";
import { ArrowDown2 } from "iconsax-react";
import { observer } from "mobx-react";
import { DataTable } from "mantine-datatable";
import {
  HorizontalKeyValuePair,
  VerticalKeyValuePair,
} from "@ui/molecules/text";

export default observer(function OrderHistoryScreen() {
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
                <Title sx={{ fontSize: 24 }}>Order History</Title>
              </Box>
            </Group>

            <Stack
              sx={(theme) => {
                return {
                  padding: 12,
                };
              }}
            >
              <Group position="apart" spacing={"xl"}>
                <Box sx={{ flex: 1 }}></Box>
              </Group>

              <DataTable
                height={500}
                striped={false}
                withColumnBorders
                style={{ background: "ghostwhite", paddingTop: 0 }}
                verticalSpacing="md"
                noRecordsIcon={true}
                borderRadius="xs"
                records={orderManager.items}
                withBorder={false}
                rowExpansion={{
                  allowMultiple: false,
                  content: (props) => {
                    let data = props.record;
                    return (
                      <Box p="md" key={props.recordIndex}>
                        <Box p="md" sx={{ background: "ghostwhite" }}>
                          <Stack>
                            <Grid>
                              <Grid.Col md={4}>
                                <VerticalKeyValuePair
                                  label="Status"
                                  value={`${data.status}`}
                                />
                              </Grid.Col>
                              <Grid.Col md={4}>
                                <VerticalKeyValuePair
                                  label="Created At"
                                  value={`${new Date(
                                    data.updated_at
                                  ).toDateString()}`}
                                />
                              </Grid.Col>
                              <Grid.Col md={4}>
                                <VerticalKeyValuePair
                                  label="Update At"
                                  value={`${new Date(
                                    data.created_at
                                  ).toDateString()}`}
                                />
                              </Grid.Col>
                            </Grid>
                            <Box>
                              <Text color="gray">Items</Text>
                              {props.record.items.map((element) => {
                                return (
                                  <Text>
                                    {element.product_name} X {element.quantity}{" "}
                                  </Text>
                                );
                              })}
                            </Box>
                            <Divider />
                            <Group position="right">
                              {props.record.payment_status == "pending" ? (
                                <Button size="sm">Pay</Button>
                              ) : null}
                            </Group>
                          </Stack>
                        </Box>
                      </Box>
                    );
                  },
                }}
                columns={[
                  {
                    accessor: "id",
                    title: "#",
                    textAlignment: "center",
                    width: 50,
                    render: ({}) => (
                      <Group position="center">
                        <Box
                          sx={{ width: 10, height: 10, background: "gray" }}
                        ></Box>
                      </Group>
                    ),
                  },
                  {
                    accessor: "name",
                    title: "Items Purchased",
                    render: ({ items }) => {
                      return (
                        <Text>
                          {items[0].product_name} and {items.length - 1} more
                        </Text>
                      );
                    },
                  },
                  {
                    accessor: "sum_total",
                    title: "Total",
                  },
                  {
                    accessor: "status",
                    title: "Status",
                  },
                  {
                    accessor: "payment_status",
                    title: "Payment",
                  },
                  {
                    accessor: "d",
                    title: "Action",
                    width: 100,
                    render: ({}) => (
                      <Group>
                        <ActionIcon>
                          <ArrowDown2 variant="Bold" />
                        </ActionIcon>
                      </Group>
                    ),
                  },
                ]}
              />
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
});
