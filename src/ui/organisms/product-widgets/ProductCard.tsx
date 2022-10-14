import { Box, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconCamera } from "@tabler/icons";
import { Camera } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils";

export default function ProductCard() {
  let navigate = useNavigate();
  return (
    <Box>
      <Paper
        withBorder
        sx={{ overflow: "hidden" }}
        onClick={() => {
          navigate("/store/store/products/product-id");
        }}
        px={14}
      >
        <Box pt={14}>
          <Box
            sx={{
              paddingTop: "100%",
              backgroundColor: "#404040",
              position: "relative",
              borderRadius: 8,
            }}
          >
            <Box sx={{ position: "absolute", bottom: 12, left: 12 }}>
              <Box
                sx={{
                  color: "white",
                  padding: "2px 6px",
                  background: "rgba(200,200,200,.3)",
                  borderRadius: 50,
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <IconCamera color="white" size={12} />
                <Text pl={"4px"} size="xs">
                  10
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Stack spacing={"xs"} sx={{ flex: 1 }} px="12px" py="12px">
          <Box>
            <Title size={"md"} color="#183B56">
              Product name goes
            </Title>
            <Text size={"sm"}> Bolade Beauty Shop</Text>
            <Text size={"sm"} sx={{ color: "#183B56" }}>
              Oshodi Market, Lagos
            </Text>
            <Title size={"md"} color="#183B56">
              {formatCurrency(1000)}
            </Title>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
