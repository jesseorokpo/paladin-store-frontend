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
  Box,
  Stack,
  Container,
  Input,
  Grid,
} from "@mantine/core";

import { useForm } from "@mantine/form";

export function LoginScreen(props: any) {
  return (
    <Box py="42px">

      <Grid justify={"center"}>
        <Grid.Col md={6}>
          <Container>
            <Title color={"#183B56"}>Sign in.</Title>

            <Stack>
              <TextInput
                placeholder="Your name"
                label="Full name"
                withAsterisk
                size="lg"
              />
              <PasswordInput
                label="Password"
                size="lg"
              />

              <Button
                size="lg"
                onClick={() => {

                }}
              >
                Signin{" "}
              </Button>
              <Text sx={{ textAlign: 'center' }}>
                Don’t have a seller account? <span style={{ fontWeight: "bold" }}>Register</span>
              </Text>
            </Stack>
          </Container>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
