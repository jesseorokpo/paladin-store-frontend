import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form"
import {
  TextInput,
  PasswordInput,
  Text,

  Button,
  Divider,
  Checkbox,
  Anchor,
  Title,
  Stack,
  Box,
  Container,
  Grid,
  Group,
  Avatar,
} from "@mantine/core";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";

export function RegisterScreen(props: any) {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
  });

  return (
    <Container py="42px">

      <Stack>
        
        <Grid>
          <Grid.Col md={6}>
            <TextInput
              label="Business Registration Number *"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              label="Business Category *"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              label="Business Name"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              label="zmarket Website URL *"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={12}>
            <TextInput
              label="Business Address *"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>

        </Grid>

        <Grid>
          <Grid.Col md={12}>
            <Text sx={{ fontWeight: "bold" }}>Social (Optional)</Text>
          </Grid.Col>
          <Grid.Col md={4}>
            <TextInput
              label="Name"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <TextInput
              label="Name"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <TextInput
              label="Name"
              placeholder="Your name"
              size="md"
            />
          </Grid.Col>
        </Grid>


        <Group position="apart">
          <Avatar size={"xl"} />

          <Button>Add Brand Logo</Button>
        </Group>
      </Stack>
    </Container>
  );
}
