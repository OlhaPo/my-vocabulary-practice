import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

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
          component={Link}
          to={"/practice"}
          variant="outlined"
          size="large"
          sx={{ mb: "40px", width: "50%" }}
        >
          Практика
        </Button>
        <Button
          component={Link}
          to={"/vocabulary"}
          variant="outlined"
          size="large"
          sx={{ width: "50%" }}
        >
          Словник
        </Button>
      </Box>
    </Container>
  );
}
