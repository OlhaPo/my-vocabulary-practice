import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Homescreen() {
  return (
    <Container className="Homescreen">
      <Box
        className="NavigationButtons"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          mt: "100px",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          sx={{ mb: "40px", width: "50%" }}
        >
          Практика
        </Button>
        <Button variant="outlined" size="large" sx={{ width: "50%" }}>
          Словник
        </Button>
      </Box>
    </Container>
  );
}
