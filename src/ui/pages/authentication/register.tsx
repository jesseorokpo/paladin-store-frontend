import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import {useForm} from "@mantine/form"
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
    <AuthenticationTemplate>
      <Title>Let’s create your account.</Title>
      <Text size="lg" weight={500} sx={{ width: "80%" }}>
        Signing up for ElevatedHub is fast and free. No commitments or long-term
        contracts.
      </Text>

      <form onSubmit={form.onSubmit(() => { })} style={{ marginTop: 24 }}>
        <Stack >
          <TextInput
            label="Name"
            placeholder="Your name"
            size="lg"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
          />
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

          <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={(event) =>
              form.setFieldValue("terms", event.currentTarget.checked)
            }
          />

          <Text color={"gray"}>
            This site is protected by reCAPTCHA Enterprise and the Google
            Privacy Policy and Terms of Service apply.
          </Text>

          <Button
            size="lg"
            onClick={() => {
              if (form.validate()) {
              }
            }}
          >
            Create Account
          </Button>
          <Text size="lg" weight={500} sx={{ width: "80%" }}>
            Already have a Central market account?{" "}
            <Link to={"/login"}>
              <Button variant="white" sx={{ paddingLeft: 4 }}>
                Sign in
              </Button>
            </Link>
          </Text>
        </Stack>
      </form>
    </AuthenticationTemplate>
  );
}
