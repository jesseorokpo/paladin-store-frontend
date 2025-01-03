import {
  Box,
  Title,
  Text,
  Container,
  Stack,
  Input,
  Select,
  Group,
  Grid,
  ActionIcon,
} from "@mantine/core";
import { dataManager } from "@store/data";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import RenderProductsGrid from "@ui/organisms/renderers/RenderProductsGrid";
import {
  ArrowDown2,
  Grid1,
  RowVertical,
  SearchNormal1,
} from "iconsax-react";
import { observer } from "mobx-react";


export default observer(function ExploreScreen() {
  return (
    <Stack>
      <Box
        sx={{
          background: "blue",
          backgroundImage:
            "linear-gradient(to bottom, rgb(222, 190, 162,.5), rgb(85, 55, 37)), url(https://i.imgur.com/7Wozahe.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container size="md" sx={{}}>
          <Stack
            spacing={"xl"}
            py={"24px"}
            justify="center"
            align={"stretch"}
            sx={{ color: "whitesmoke", textAlign: "center" }}
          >
            <Box>
              <Title>School Paladmin Commerce</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quo aut, debitis ipsum, voluptate velit.
              </Text>
            </Box>

            <Box>
              <SearchComp />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{}}>
        <Container size="lg" py="32px" sx={{ backgroundColor: "white" }}>
          <Stack py={"24px"} spacing="xl">
            <SectionHeader
              title="Products"
              showBorder={false}
              right={
                <Group>
                  <ActionIcon>
                    <Grid1 variant="Bold" />
                  </ActionIcon>
                  <ActionIcon>
                    <RowVertical variant="Bold" />
                  </ActionIcon>
                </Group>
              }
            />
            <RenderProductsGrid products={dataManager.products} />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
});

function SearchComp() {
  return (
    <div>
      <Box>
        <Grid
          sx={{ background: "white", padding: "4px 12px", borderRadius: 4 }}
        >
          <Grid.Col span={12} sm={4} md={4}>
            <Select
              sx={{ flex: 0.5 }}
              data={dataManager.categories.map((element) => {
                //@ts-ignore
                return { value: element._id, label: element.name };
              })}
              variant="unstyled"
              placeholder="Category"
              rightSection={<ArrowDown2 size={14} color="black" />}
            />
          </Grid.Col>

          <Grid.Col span={12} sm={8} md={8}>
            <Input
              sx={{ flex: 1 }}
              placeholder="Search products, brands..."
              rightSection={<SearchNormal1 color="black" />}
              variant="unstyled"
            />
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  );
}
