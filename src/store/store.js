import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from "./vocabularySlice";

export default configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
  },
});
