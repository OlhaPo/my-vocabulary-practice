import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import PositionedMenu from "./PositionedMenu";
import Container from "@mui/material/Container";
import Homescreen from "./Homescreen";
import Practice from "./Practice";
import FlashCard from "./FlashCard";
import Vocabulary from "./Vocabulary";
import WordOverview from "./WordOverview";
import EditWordForm from "./EditWordForm";
import PageNotFound from "./PageNotFound";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container maxWidth="sm" sx={{ height: "100%" }}>
        <BrowserRouter>
          <PositionedMenu />
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="practice" element={<Practice />} />
            <Route path="flashcard/:language" element={<FlashCard />} />
            <Route path="vocabulary" element={<Vocabulary />} />
            <Route path="word/:id" element={<WordOverview />} />
            <Route path="edit/:id" element={<EditWordForm />} />
            <Route path="create" element={<EditWordForm />} />
            <Route path="not-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
