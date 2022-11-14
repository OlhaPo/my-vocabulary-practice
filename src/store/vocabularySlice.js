import { createSlice } from "@reduxjs/toolkit";

export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState: {
    data: [
      {
        id: 1,
        value_ua: "pies",
        value_pl: "собака",
        description: "",
      },
      {
        id: 2,
        value_ua: "kot",
        value_pl: "кіт",
        description: "",
      },
      {
        id: 3,
        value_ua: "tygrys",
        value_pl: "тигр",
        description: "",
      },
      {
        id: 4,
        value_ua: "lew",
        value_pl: "лев",
        description: "",
      },
    ],
  },
  reducers: {
    addWord: (state, action) => {
      // @TODO generate new id
      state.data.push(action.payload);
      return state;
    },
  },
});

export const { addWord } = vocabularySlice.actions;

export default vocabularySlice.reducer;
