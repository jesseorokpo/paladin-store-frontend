import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Title,
  Stack,
  Container,
  Box,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { loginManager } from "@store/account/loginManager";
import { RenderPlatformBanner } from "@ui/organisms/utils/covers";
import { authManager } from "@store/account/auth";
import { Link, Navigate } from "react-router-dom";
import { observer } from "mobx-react";

export const LoginScreen = observer((props: any) => {
  let [submitting, setSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
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

      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            setSubmitting(true);
            await loginManager.login({
              email: values.email,
              password: values.password,
            });

            setSubmitting(false);
          } catch (e) {
            setSubmitting(false);
          }
        })}
      >
        <Container size={"xs"}>
          <Title color={"#183B56"}>Sign in.</Title>
          <Stack>
            <TextInput
              placeholder="email"
              label="Email"
              withAsterisk
              size="lg"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              size="lg"
              {...form.getInputProps("password")}
            />

            <Button size="lg" type="submit" loading={submitting}>
              Signin
            </Button>
            <Text sx={{ textAlign: "center" }}>
              Don’t have a seller account?{" "}
              <Link to={"/register"}>
              <span style={{ fontWeight: "bold" }}>Register</span></Link>
            </Text>
          </Stack>
        </Container>
      </form>
    </Box>
  );
});
