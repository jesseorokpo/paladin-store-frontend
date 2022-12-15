import React, { useState } from "react";
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
  Textarea,
  Paper,
} from "@mantine/core";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { authManager } from "@store/account/auth";
import { userController } from "../../../config/sdk";
import { showNotification } from "@mantine/notifications";

export const EditProfileScreen = observer((props: any) => {
  let [submitting, setSubmitting] = useState(false);
  let { first_name, last_name, email, phone, photo, bio } = authManager.user;
  const form = useForm({
    initialValues: {
      bio: "",
      first_name,
      last_name,
      email,
      phone,
      photo,
    },
  });

  return (
    <Container py="42px">
      <Paper p="16px" shadow={"md"}>
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              setSubmitting(true);
              await userController.userControllerUpdateUserProfile(
                authManager.user.id ?? "",
                {
                  ...values,
                }
              );

              showNotification({ message: "Updated profile" });

              authManager.loadProfile();

              setSubmitting(false);
            } catch (e) {
              setSubmitting(false);
            }
          })}
        >
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
                      placeholder="Type here"
                      size="md"
                      {...form.getInputProps("phone")}
                    />
                  </Grid.Col>
                  <Grid.Col md={3}>
                    <Select
                      label="Account Type"
                      value={"individual"}
                      disabled
                      data={[{ value: "individual", label: "Individial" }]}
                      size="md"
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      label="Email"
                      placeholder="Type here"
                      {...form.getInputProps("email")}
                      size="md"
                      disabled
                    />
                  </Grid.Col>

                  <Grid.Col md={12}>
                    <Textarea
                      label="Bio"
                      placeholder="Type here"
                      {...form.getInputProps("bio")}
                      size="md"
                    />
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>

            <Button fullWidth type="submit">
              Save
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
});
