import { ChangeEvent, FormEvent, useState } from "react";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Grid,
  Select,
  Box,
} from "@mantine/core";
import axios from "axios"
import { SectionHeader } from "../header-widgets/SectionHeader";

interface LockerProps {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  school: string;
  lockerHandle: string;
  lockerPin: string;
}

export function NewLockerProcess() {
  const [opened, setOpened] = useState(false);
  const [gender, setGender] = useState("")
  const [lockerData, setLockerData] = useState<LockerProps>({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    school: "",
    lockerHandle: "",
    lockerPin: "",

  })

  const handleSelectChange = (value: string | null) => {
    if (value) {
      setGender(value);
      setLockerData(prevState => ({
        ...prevState,
        gender: value
      }))
      console.log(lockerData)
      console.log(value)
      // Your custom logic here based on the selected value
    }
  }


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const { name, value } = e.target;
    setLockerData(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(lockerData)
  }


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const response = await axios.post("",
      {
        Headers: {

        }
      }
    )
    console.log(response)
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Locker"
      >
        <SectionHeader title="Owner Profile" showBorder={false} />
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col md={6}>
              <TextInput name="firstName" value={lockerData.firstName} onChange={handleChange} label="First Name" />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput name="lastName" value={lockerData.lastName} onChange={handleChange} label="Last Name" />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput name="middleName" value={lockerData.middleName} onChange={handleChange} label="Middle Name" />
            </Grid.Col>
            <Grid.Col md={6}>
              <Select name="gender" value={gender} onChange={handleSelectChange} label="Gender" data={["Male", "Female"]} />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput name="school" value={lockerData.school} onChange={handleChange} label="School" />
            </Grid.Col>
          </Grid>

          <Box sx={{ height: 24 }} />
          <SectionHeader title="Locker Profile" showBorder={false} />
          <Grid>
            <Grid.Col span={12}>
              <TextInput name="lockerHandle" value={lockerData.lockerHandle} onChange={handleChange} label="handle" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput name="lockerPin" value={lockerData.lockerPin} onChange={handleChange} label="Pin" />
            </Grid.Col>
          </Grid>

          <Button type="submit" fullWidth>Create</Button>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Locker</Button>
      </Group>
    </>
  );
}
