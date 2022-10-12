import { Avatar, Box, Grid, Group, Text } from "@mantine/core";

const brandsCats = [
  {
    title: "Fashion",
    captiton: "12 Brands",
  },
  {
    title: "Gadgets",
    captiton: "12 Brands",
  },
  {
    title: "Automobile",
    captiton: "12 Brands",
  },
  {
    title: "Fashion",
    captiton: "12 Brands",
  },
  {
    title: "Gadgets",
    captiton: "12 Brands",
  },
  {
    title: "Automobile",
    captiton: "12 Brands",
  },
  {
    title: "Gadgets",
    captiton: "12 Brands",
  },
  {
    title: "Automobile",
    captiton: "12 Brands",
  },
];

export default function RenderBrandCategoriesGrid() {
  return (
    <Box>
      <Grid>
        {brandsCats.map((element) => {
          return (
            <Grid.Col span={6} xs={6} sm={6} md={3}>
              <Group align={"center"} sx={{ backgroundColor: "ghostwhite" }}>
                <Avatar
                  size={"xl"}
                  src={
                    "https://cdn.dribbble.com/users/5917891/screenshots/16231517/media/6f191703667b67283bdfe386a1412782.jpg?compress=1&resize=400x300"
                  }
                />
                <Box sx={{ flex: 1, textAlign: "start" }}>
                  <Text sx={{ fontWeight: "bold" }}>{element.title}</Text>
                  <Text>12 Brands</Text>
                </Box>
              </Group>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
}
