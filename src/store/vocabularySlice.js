import { createSlice } from "@reduxjs/toolkit";

const placeholderData = [
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
];

export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState: {
    data: getFromLocalStorage(),
  },
  reducers: {
    addWord: (state, action) => {
      const lastIndex = state.data.length - 1;
      const lastItem = state.data[lastIndex];
      state.data.push({ ...action.payload, id: lastItem.id + 1 });
      saveToLocalStorage(state.data);
      return state;
    },
    deleteWordAction: (state, action) => {
      state.data = state.data.filter((word) => word.id !== action.payload);
      saveToLocalStorage(state.data);
      return state;
    },
    updateWord: (state, action) => {
      // @TODO: implement
      saveToLocalStorage(state.data);
      return state;
    },
  },
});

export const getWordById = (id) => {
  return function (state) {
    return state.vocabulary.data.find((row) => row.id === id);
  };
};

function saveToLocalStorage(data) {
  localStorage.setItem("vocabulary", JSON.stringify(data));
}

function getFromLocalStorage() {
  const stored = localStorage.getItem("vocabulary");
  const parsed = JSON.parse(stored);
  if (parsed !== null) {
    return parsed;
  } else {
    return placeholderData;
  }
}

export const { addWord, deleteWordAction, updateWord } =
  vocabularySlice.actions;

export default vocabularySlice.reducer;
