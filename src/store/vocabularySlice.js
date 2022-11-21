import { createSlice } from "@reduxjs/toolkit";

const placeholderData = [
  {
    id: 1,
    value_ua: "привіт",
    value_pl: "cześć",
    description:
      "Cześć, chciałem tylko powiedzieć, że twój problem jest rozwiązany",
  },
  {
    id: 2,
    value_ua: "кіт",
    value_pl: "kot",
    description: "",
  },
  {
    id: 3,
    value_ua: "тигр",
    value_pl: "tygrys",
    description: "",
  },
  {
    id: 4,
    value_ua: "лев",
    value_pl: "lew",
    description: "",
  },
];

const vocabulary = getFromLocalStorage();
export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState: {
    data: vocabulary,
    randomWord: getRandomElement(vocabulary),
    lastCreatedId: null,
  },
  reducers: {
    addWord: (state, action) => {
      const lastIndex = state.data.length - 1;
      const lastItem = state.data[lastIndex];
      const newWordId = lastItem.id + 1;
      state.data.push({ ...action.payload, id: newWordId });
      state.lastCreatedId = newWordId;
      saveToLocalStorage(state.data);
      return state;
    },
    resetLastId: (state) => {
      state.lastCreatedId = null;
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
    getRandomWordAction: (state) => {
      state.randomWord = getRandomElement(state.data);
      return state;
    },
  },
});

export const getWordById = (id) => {
  return function (state) {
    return state.vocabulary.data.find((row) => row.id === id);
  };
};

export const getRandomWord = (state) => {
  return state.vocabulary.randomWord;
};

export const getLastCreatedId = (state) => {
  return state.vocabulary.lastCreatedId;
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
    saveToLocalStorage(placeholderData);
    return placeholderData;
  }
}

function getRandomElement(array) {
  if (array.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const {
  addWord,
  deleteWordAction,
  updateWord,
  getRandomWordAction,
  resetLastId,
} = vocabularySlice.actions;

export default vocabularySlice.reducer;
