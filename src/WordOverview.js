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
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getWordById } from "./store/vocabularySlice";

const paper = function (word) {
  return (
    <Box>
      <Typography
        sx={{ fontSize: 15, mt: "20px", fontWeight: "bold" }}
        variant="h6"
        gutterBottom
      >
        PL
      </Typography>
      <Typography variant="h4">{word.value_pl}</Typography>
      <Divider sx={{ mb: "35px", mt: "35px" }} />
      <Typography
        sx={{ fontSize: 15, fontWeight: "bold" }}
        variant="h6"
        gutterBottom
      >
        UA
      </Typography>
      <Typography variant="h4">{word.value_ua}</Typography>
      <Typography
        variant="body1"
        sx={{ mb: "20px", mt: "15px", fontStyle: "italic" }}
      >
        {word.description}
      </Typography>
    </Box>
  );
};

export default function WordOverview() {
  const { id } = useParams();
  const word = useSelector(getWordById(+id));

  return (
    <Container className="WordOverview">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mt: "50px",
            width: "600px",
            p: "20px 30px",
          },
        }}
      >
        <Paper elevation={3}>{paper(word)}</Paper>
      </Box>
      <Box sx={{ fontSize: "60px", mt: "30px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button component={Link} to={"/vocabulary"}>
            <ArrowBackIcon sx={{ fontSize: "30px" }} />
          </Button>
          <Button component={Link} to={"/edit/" + id}>
            <EditIcon sx={{ fontSize: "30px" }} />
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
