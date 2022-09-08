import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

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
    <Container className="WordOverview">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mt: "100px",
            width: "600px",
            p: "20px 30px",
          },
        }}
      >
        <Paper elevation={3}>{paper}</Paper>
      </Box>
      <Box sx={{ fontSize: "60px", mt: "30px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button>
            <ArrowBackIcon sx={{ fontSize: "30px" }} />
          </Button>
          <Button>
            <EditIcon sx={{ fontSize: "30px" }} />
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
