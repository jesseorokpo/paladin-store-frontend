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
} from "@mantine/core";
import { AuthenticationTemplate } from "../../template/authentication";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "iconsax-react";
import { IconBrandTwitter } from "@tabler/icons";

export function BrandRegisterationScreen(props: any) {
  let [submitting, setSubmitting] = useState(false);
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
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            setSubmitting(true);

            setSubmitting(false);
          } catch (e) {
            setSubmitting(false);
          }
        })}
      >
        <Stack spacing={"xl"}>
          <Title>Create Brand Account</Title>
          <Text>Personal Details</Text>
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                label="Business Registeration Number"
                placeholder="Type Here"
                size="md"
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <Select
                label="Business Category"
                placeholder="Your name"
                data={[]}
                size="md"
              />
            </Grid.Col>

            <Grid.Col md={6}>
              <TextInput label="Business Name" placeholder="" size="md" />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput label="Website URL" placeholder="" size="md" />
            </Grid.Col>

            <Grid.Col md={12}>
              <Textarea label="Address" placeholder="" size="md" />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col md={4}>
              <Group mb={"8px"}>
                <Facebook variant="Bold" />
                <Text>Facebook</Text>
              </Group>
              <TextInput placeholder="Facebook URL" size="md" />
            </Grid.Col>
            <Grid.Col md={4}>
              <Group mb={"8px"}>
                <IconBrandTwitter />
                <Text>Twitter</Text>
              </Group>
              <TextInput placeholder="Twitter URL" size="md" />
            </Grid.Col>
            <Grid.Col md={4}>
              <Group mb={"8px"}>
                <Instagram variant="Bold" />
                <Text>Instagram</Text>
              </Group>
              <TextInput placeholder="Instagram URL" size="md" />
            </Grid.Col>
          </Grid>

          <Button fullWidth size="lg">
            Complete Registeration
          </Button>
        </Stack>
      </form>
    </Container>
  );
}