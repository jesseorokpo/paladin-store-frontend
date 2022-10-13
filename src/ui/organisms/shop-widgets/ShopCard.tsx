import {
  Paper,
  Center,
  Stack,
  Divider,
  MediaQuery,
  Box,
  Text,
} from "@mantine/core";
import { IconBuildingStore } from "@tabler/icons";
import { Verify } from "iconsax-react";
import { useNavigate } from "react-router-dom";

export const ShopCard = () => {
  let navigate = useNavigate();
  return (
    <Paper
      withBorder
      sx={{ overflow: "hidden" }}
      onClick={() => {
        navigate("/store/store");
      }}
    >
      <Box>
        <Box
          sx={{
            paddingTop: "70%",
            backgroundColor: "#FEF7E7",
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: 12, left: 12 }}>
            <Verify variant="Bold" color="#2ADF3C" />
          </Box>

          <Center
            p={"8px"}
            sx={{
              borderRadius: 50,
              position: "absolute",
              bottom: -13,
              right: 12,
              background: "#00B2F0",
            }}
          >
            <IconBuildingStore color="white" size={18} />
          </Center>
        </Box>
      </Box>
      <Stack spacing={"xs"} sx={{ flex: 1 }} px="12px" py="12px">
        <Box>
          <Text sx={{ fontWeight: "bold", color: "#183B56" }}>
            Bolade Beauty Shop
          </Text>
          <Text sx={{ color: "#183B56" }}>Oshodi Market, Lagos</Text>
        </Box>
        <Divider color={"ghostwhite"} />

        <MediaQuery
          smallerThan="sm"
          styles={{
            display: "none",
            background: "orange",
          }}
        >
          <Text size={"sm"} sx={{ color: "#183B56" }}>
            The best beauty product shop with cheap price
          </Text>
        </MediaQuery>
      </Stack>
    </Paper>
  );
};
