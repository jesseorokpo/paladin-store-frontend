import { Center, Stack, Box, Text, Button } from "@mantine/core";
import { authManager } from "@store/account/auth";
import { useNavigate } from "react-router-dom";

export const SomethingWentWrongWidget = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Center sx={{ paddingTop: 200 }}>
        <Stack align={"center"} justify="center">
          <img src={require("./../../assets/Error.png")} height={180} />
          <Text sx={{ textAlign: "center" }}>Something Went Wrong</Text>
          <Button
            onClick={() => {
              authManager.init();
              navigate("/");
            }}
          >
            Reload
          </Button>
        </Stack>
      </Center>
    </Box>
  );
};
