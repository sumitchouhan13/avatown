import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "All",
  likedCards: new Array(24),
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    addLikedCards: (state, action) => {
      state.likedCards[action.payload] = true;
    },
    removeLikedCards: (state, action) => {
      state.likedCards[action.payload] = false;
    },
  },
});

export const { changeSortBy, addLikedCards, removeLikedCards } =
  cardSlice.actions;

export default cardSlice.reducer;
