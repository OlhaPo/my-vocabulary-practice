import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const paper = (
  <Box>
    <Typography
      sx={{ fontSize: 15, mt: "20px", fontWeight: "bold" }}
      variant="h6"
      gutterBottom
    >
      PL
    </Typography>
    <Typography variant="h4">Cześć</Typography>
    <Divider sx={{ mb: "35px", mt: "35px" }} />
    <Typography
      sx={{ fontSize: 15, fontWeight: "bold" }}
      variant="h6"
      gutterBottom
    >
      UA
    </Typography>
    <Typography variant="h4">Привіт</Typography>
    <Typography
      variant="body1"
      sx={{ mb: "20px", mt: "15px", fontStyle: "italic" }}
    >
      Cześć, chciałem tylko powiedzieć, że twój problem jest rozwiązany.
    </Typography>
  </Box>
);

export default function WordOverview() {
  return (
    <Box
      className="WordOverview"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          mt: "100px",
          width: "600px",
          height: "300px",
          p: "20px 30px",
        },
      }}
    >
      <Paper elevation={3}>{paper}</Paper>
    </Box>
  );
}
