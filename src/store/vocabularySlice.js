import { createSlice } from "@reduxjs/toolkit";

export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState: {
    data: getFromLocalStorage(),
  },
  reducers: {
    addWord: (state, action) => {
      // @TODO generate new id
      state.data.push(action.payload);
      saveToLocalStorage(state.data);
      return state;
    },
  },
});

function saveToLocalStorage(data) {
  localStorage.setItem("vocabulary", JSON.stringify(data));
}

function getFromLocalStorage() {
  const stored = localStorage.getItem("vocabulary");
  const parsed = JSON.parse(stored);
  if (parsed !== null) {
    return parsed;
  } else {
    return [];
  }
}

export const { addWord } = vocabularySlice.actions;

export default vocabularySlice.reducer;
