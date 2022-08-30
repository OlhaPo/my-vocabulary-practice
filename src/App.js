import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./App.css";

export default function App() {
  return (
    <Box className="App" sx={{ height: "100%" }}>
      <Box
        className="NavigationButtons"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Button variant="outlined" size="large">
          Практика
        </Button>
        <Button variant="outlined" size="large">
          Словник
        </Button>
      </Box>
    </Box>
  );
}
