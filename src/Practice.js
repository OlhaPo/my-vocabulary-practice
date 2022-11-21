import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Practice() {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  return (
    <Box className="Practice">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Div sx={{ p: "20px", fontSize: 18 }}>Практика</Div>
        <Button
          component={Link}
          to={"/flashcard/pl"}
          variant="outlined"
          size="large"
          sx={{ m: "20px 0", width: "50%" }}
        >
          PL - UA
        </Button>
        <Button
          component={Link}
          to={"/flashcard/ua"}
          variant="outlined"
          size="large"
          sx={{ width: "50%" }}
        >
          UA - PL
        </Button>
      </Box>
    </Box>
  );
}
