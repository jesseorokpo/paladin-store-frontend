import React from "react";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Title,
} from "@mantine/core";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";

export function LoginScreen(props:any) {
 
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
  });

  return (
    <AuthenticationTemplate>
      <Title>Sign in.</Title>
      <Text size="lg" weight={500} sx={{ width: "80%" }}>
        New to  ElevatedHub?{" "}
        <Link to={"/register"}>
          <Button variant="white" sx={{ paddingLeft: 4 }}>
            Signup
          </Button>
        </Link>
      </Text>

      <form onSubmit={form.onSubmit(() => { })} style={{ marginTop: 24 }}>
        <Group grow>
          <TextInput
            required
            label="Email"
            size="lg"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
          />

          <PasswordInput
            required
            label="Password"
            size="lg"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />

          <Button
            size="lg"
            onClick={() => {
          
            }}
          >
            Signin{" "}
          </Button>
        </Group>
      </form>
    </AuthenticationTemplate>
  );
}
