import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Text,
  Grid,
  Select,
  Box,
} from "@mantine/core";
import { SectionHeader } from "../header-widgets/SectionHeader";
import { useForm } from "@mantine/form";
import { lockerManager } from "@store/utils/locker";

export function NewLockerProcess() {
  const [opened, setOpened] = useState(false);
  let [submitting, setSubmitting] = useState(false);

  const form = useForm({
    initialValues: {
      first_name: "",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
      last_name: "",
      middle_name: "",
      school: "",
      pin: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Locker"
      >
        <form
          onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            try {
              setSubmitting(true);
             await  lockerManager.publishItem({ ...values });
              setSubmitting(false);
            } catch (e) {
              setSubmitting(false);
            }
          })}
        >
          <SectionHeader title="Owner Profile" showBorder={false} />
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                label="First Name"
                {...form.getInputProps("first_name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                label="Last Name"
                {...form.getInputProps("last_name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                label="Middle Name"
                {...form.getInputProps("middle_name")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="School"
                {...form.getInputProps("middle_name")}
              />
            </Grid.Col>
          </Grid>

          <Box sx={{ height: 24 }} />
          <SectionHeader title="Locker Profile" showBorder={false} />
          <Grid>
            <Grid.Col span={12}>
              <TextInput label="PID" value={"Auto Generated"} />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Pin"
                value={"123456"}
                {...form.getInputProps("pin")}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Button fullWidth type="submit" loading={submitting}>
                Create
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Locker</Button>
      </Group>
    </>
  );
}
