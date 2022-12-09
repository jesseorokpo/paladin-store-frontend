import React, { useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Title,
  Stack,
  Box,
  Container,
  Grid,
} from "@mantine/core";
import { registerationManager } from "../../../store/account/registerationManager";
import { Link, Navigate } from "react-router-dom";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";
import { authManager } from "@store/account/auth";
import { observer } from "mobx-react";

export const RegisterationScreen = observer((props: any) => {
  let [submitting, setSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  if (authManager.status == "AUTHENTICATED") {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <RenderPlatformBanner />
      <Container py="42px">
        <Stack spacing={"xl"}>
          <Title>Create New Account</Title>
          <form
            onSubmit={form.onSubmit(async (values) => {
              try {
                setSubmitting(true);
                await registerationManager.createAccount({
                  ...values,
                });
                setSubmitting(false);
              } catch (e) {
                setSubmitting(false);
              }
            })}
          >
            <Stack spacing={"xl"}>
              <Grid>
                <Grid.Col md={6}>
                  <TextInput
                    label="First Name"
                    placeholder="Type Here"
                    size="lg"
                    {...form.getInputProps("first_name")}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <TextInput
                    label="Last Name"
                    placeholder="Type here"
                    size="lg"
                    {...form.getInputProps("last_name")}
                  />
                </Grid.Col>
                <Grid.Col md={12}>
                  <Grid>
                    <Grid.Col md={6}>
                      <TextInput
                        label="Phone Number"
                        placeholder="Type here"
                        size="lg"
                        {...form.getInputProps("phone")}
                      />
                    </Grid.Col>

                    <Grid.Col md={6}>
                      <TextInput
                        label="Email"
                        placeholder="Type here"
                        size="lg"
                        {...form.getInputProps("email")}
                      />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
                <Grid.Col md={6}>
                  <PasswordInput
                    label="Password"
                    placeholder="Type Here"
                    size="lg"
                    {...form.getInputProps("password")}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Type here"
                    size="lg"
                    {...form.getInputProps("confirm_password")}
                  />
                </Grid.Col>
              </Grid>

              <Button fullWidth size="lg" loading={submitting} type="submit">
                Continue
              </Button>
            </Stack>
          </form>

          <Text sx={{ textAlign: "center" }}>
            Already have a seller account?{" "}
            <Link to="/login">
              <span style={{ fontWeight: "bold" }}>Signin</span>
            </Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
});
