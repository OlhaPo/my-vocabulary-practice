import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 18, mt: "10px", ml: "10px" }}
        variant="h6"
        gutterBottom
      >
        PL
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{ fontSize: 40, mt: "25px", textAlign: "center" }}
      >
        Cześć
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button
        size="small"
        sx={{
          fontSize: 10,
          mb: "20px",
        }}
      >
        Tłumaczenie
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function FlashCard() {
  return (
    <Container className="FlashCard">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            mt: "120px",
            borderRadius: "16px",
            border: "3px solid #1976d2",
          }}
        >
          {card}
        </Card>
        <Box sx={{ fontSize: "60px", textAlign: "right" }}>
          <Button variant="text">
            <ArrowForwardIcon sx={{ fontSize: "30px" }} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
