import { useState } from "react";
import {} from "@mantine/hooks";
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
  Select,
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
      account_type: "",
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password characters must be more than 6",
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
                    {...form.getInputProps("first_name")}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <TextInput
                    label="Last Name"
                    placeholder="Type here"
                    {...form.getInputProps("last_name")}
                  />
                </Grid.Col>
                <Grid.Col md={12}>
                  <Grid>
                    <Grid.Col md={6}>
                      <TextInput
                        label="Phone Number"
                        placeholder="Type here"
                        {...form.getInputProps("phone")}
                      />
                    </Grid.Col>

                    <Grid.Col md={6}>
                      <TextInput
                        label="Email"
                        placeholder="Type here"
                        {...form.getInputProps("email")}
                      />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
                <Grid.Col md={6}>
                  <Select
                    label="Account Type"
                    data={[{ label: "Parent", value: "individual" }]}
                    {...form.getInputProps("account_type")}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <PasswordInput
                    label="Password"
                    placeholder="Type Here"
                    {...form.getInputProps("password")}
                  />
                </Grid.Col>
              </Grid>

              <Button fullWidth loading={submitting} type="submit">
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
