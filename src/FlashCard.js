import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import { getRandomWord, getRandomWordAction } from "./store/vocabularySlice";
import "./Flashcard.css";

export default function FlashCard() {
  const word = useSelector(getRandomWord);
  const dispatch = useDispatch();
  const { language } = useParams();
  const oppositeLanguage = language === "pl" ? "ua" : "pl";
  const navigate = useNavigate();
  const [showBack, setShowBack] = React.useState(false);

  React.useEffect(() => {
    if (language !== "pl" && language !== "ua") {
      navigate("/not-found");
    }
  }, [language, navigate]);

  const flipCard = () => {
    setShowBack(!showBack);
  };

  const nextWord = () => {
    setShowBack(false);
    setTimeout(() => dispatch(getRandomWordAction()), 200);
  };

  const getValueForLang = (lang) => {
    return word["value_" + lang];
  };

  const cardFront = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 18, mt: "10px", ml: "10px" }}
          variant="h6"
          gutterBottom
        >
          {language.toUpperCase()}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: 40, mt: "25px", textAlign: "center" }}
        >
          {getValueForLang(language)}
        </Typography>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            sx={{
              fontSize: 10,
              m: "30px 0",
            }}
            onClick={flipCard}
          >
            Tłumaczenie
          </Button>
        </CardActions>
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
          {oppositeLanguage.toUpperCase()}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: 40, mt: "25px", textAlign: "center", mb: "40px" }}
        >
          {getValueForLang(oppositeLanguage)}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const emptyState = (
    <CardContent>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: 20,
          mt: "100px",
          textAlign: "center",
          fontWeight: "300",
        }}
      >
        У словнику немає жодного слова
      </Typography>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          sx={{
            fontSize: 12,
            mt: "20px",
          }}
          component={Link}
          to={"/vocabulary"}
        >
          Перейти до внесення слів
        </Button>
      </CardActions>
    </CardContent>
  );

  return (
    <Container className="FlashCard">
      <Box className={"FlashCardContainer" + (showBack ? " flip" : "")}>
        <Box className="FlipCard">
          <Card className="FlipCardFront" sx={{ borderRadius: "16px" }}>
            {word ? cardFront : emptyState}
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
        <Button variant="text" onClick={nextWord}>
          <ArrowForwardIcon sx={{ fontSize: "30px" }} />
        </Button>
      </Box>
    </Container>
  );
}
