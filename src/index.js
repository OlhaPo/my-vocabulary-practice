import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import PositionedMenu from "./PositionedMenu";
import Container from "@mui/material/Container";
import Homescreen from "./Homescreen";
import Practice from "./Practice";
import FlashCard from "./FlashCard";
// import Vocabulary from "./Vocabulary";
import WordOverview from "./WordOverview";
import EditWordForm from "./EditWordForm";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container maxWidth="sm" sx={{ height: "100%" }}>
      <PositionedMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="practice" element={<Practice />} />
          <Route path="flashcard" element={<FlashCard />} />
          {/* <Route path="vocabulary" element={<Vocabulary />} /> */}
          <Route path="word" element={<WordOverview />} />
          <Route path="edit" element={<EditWordForm />} />
        </Routes>
        {/* <App sx={{ bgcolor: "#cfe8fc", height: "100%" }} /> */}
      </BrowserRouter>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
