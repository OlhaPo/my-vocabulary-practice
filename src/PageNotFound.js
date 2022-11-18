import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function PageNotFound() {
  return (
    <Container
      className="PageNotFound"
      sx={{
        fontSize: 18,
        lineHeight: "2",
        mt: "100px",
        textAlign: "center",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div>Сторінка не знайдена</div>
      <Button
        sx={{
          mt: "20px",
          textTransform: "none",
          fontSize: "15px",
        }}
        component={Link}
        to={"/vocabulary"}
      >
        Перейти до редагування словника
      </Button>
    </Container>
  );
}
