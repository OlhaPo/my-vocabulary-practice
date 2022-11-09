import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Flashcard.css";

export default function FlashCard() {
  const [showBack, setShowBack] = React.useState(false);

  const flipCard = () => {
    setShowBack(!showBack);
  };

  const cardFront = (
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
    </React.Fragment>
  );

  const cardBack = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 18, mt: "10px", ml: "10px" }}
          variant="h6"
          gutterBottom
        >
          UA
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: 40, mt: "25px", textAlign: "center", mb: "40px" }}
        >
          Привіт
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Container className="FlashCard">
      <Box className={"FlashCardContainer" + (showBack ? " flip" : "")}>
        <Box className="FlipCard">
          <Card className="FlipCardFront" sx={{ borderRadius: "16px" }}>
            {cardFront}
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                sx={{
                  fontSize: 10,
                  mb: "20px",
                }}
                onClick={flipCard}
              >
                Tłumaczenie
              </Button>
            </CardActions>
          </Card>

          <Card
            className="FlipCardBack"
            onClick={flipCard}
            sx={{ borderRadius: "16px" }}
          >
            {cardBack}
          </Card>
        </Box>
      </Box>
      <Box sx={{ fontSize: "60px", textAlign: "right" }}>
        <Button variant="text">
          <ArrowForwardIcon sx={{ fontSize: "30px" }} />
        </Button>
      </Box>
    </Container>
  );
}
