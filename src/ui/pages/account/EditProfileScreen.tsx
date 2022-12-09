import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
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
  Select,
} from "@mantine/core";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { authManager } from "@store/account/auth";

export const EditProfileScreen = observer((props: any) => {
  let { first_name, last_name, email, phone } = authManager.user;
  const form = useForm({
    initialValues: {
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone,
      terms: true,
    },
  });

  return (
    <Container py="42px">
      <Stack spacing={"xl"}>
        <Title>Edit Profile</Title>
        <Text>Personal Details</Text>
        <Grid>
          <Grid.Col md={6}>
            <TextInput
              label="First Name"
              placeholder="Type Here"
              size="md"
              {...form.getInputProps("first_name")}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              label="Last Name"
              placeholder="Type here"
              size="md"
              {...form.getInputProps("last_name")}
            />
          </Grid.Col>
          <Grid.Col md={12}>
            <Grid>
              <Grid.Col md={3}>
                <TextInput
                  label="Phone Number"
                  placeholder="Phone Number"
                  size="md"
                  {...form.getInputProps("phone")}
                />
              </Grid.Col>
              <Grid.Col md={3}>
                <Select
                  label="Gender"
                  placeholder="Your name"
                  data={[]}
                  size="md"
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  label="Email"
                  placeholder="Your name"
                  {...form.getInputProps("email")}
                  size="md"
                  disabled
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        <Button fullWidth>Save</Button>
      </Stack>
    </Container>
  );
});
