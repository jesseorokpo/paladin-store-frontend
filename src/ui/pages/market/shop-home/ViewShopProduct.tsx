import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Title,
  Text,
  Paper,
} from "@mantine/core";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import RenderProductsGrid from "@ui/organisms/renderers/RenderProductsGrid";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";

export const ViewShopProductScreen = () => {
  return (
    <Box>
      <RenderPlatformBanner />

      <Container size={"lg"}>
        <Paper withBorder sx={{ overflow: "hidden" }} p={24} radius="md">
          <Grid gutter={"xl"}>
            <Grid.Col md={6}>
              <Box
                sx={{
                  paddingTop: "70%",
                  backgroundColor: "#FEF7E7",
                  position: "relative",
                  borderRadius: 8,
                }}
              ></Box>
            </Grid.Col>
            <Grid.Col md={6}>
              <Stack spacing={"xl"}>
                <Box>
                  <Title>Product title</Title>

                  <Group position="apart">
                    <Box>
                      <Text>Jane Kalu Doe Enterprise</Text>
                      <Text>Balogun Ultramoder market. Lagos</Text>
                    </Box>
                    <Button variant="light">View Shop</Button>
                  </Group>
                </Box>

                <Box>
                  <Grid>
                    <Grid.Col span={4}>
                      <VerticalKeyValuePair label="Product Name" value="LG" />
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <VerticalKeyValuePair
                        label="Condition"
                        value="London Used"
                      />
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <VerticalKeyValuePair
                        label="Year of Manufacture"
                        value="2022"
                      />
                    </Grid.Col>
                  </Grid>
                </Box>

                <Title>N128,640</Title>

                <Group>
                  <Button variant="filled">Show Contact</Button>
                  <Button variant="outline">Chat with Vendor</Button>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col md={12}>
              <VerticalKeyValuePair
                label="PRODUCT DESCRIPTION"
                value={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem obcaecati. Sequi fugiat accusantium harum repellendus beatae est quasi quia omnis voluptate earum odit minus iure rerum, molestias nobis blanditiis?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem obcaecati. Sequi fugiat accusantium harum repellendus beatae est quasi quia omnis voluptate earum odit minus iure rerum, molestias nobis blanditiis?`}
              />
            </Grid.Col>

            <Grid.Col md={12}>
              <Stack>
                <SectionHeader
                  title="You may also like these Products"
                  showBorder={false}
                />
                <RenderProductsGrid useMainCard={false} />
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};
