import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "All",
  likedCards: new Array(24),
  headingName: ["All Items"],
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
    addHeadingName: (state, action) => {
      if (state.headingName[state.headingName.length - 1] === "Male") {
        state.headingName.pop();
      }
      const index = state.headingName.indexOf(action.payload);
      if (index === -1) {
        state.headingName.push(action.payload);
      } else {
        state.headingName = state.headingName.splice(0, index);
      }
    },
  },
});

export const { changeSortBy, addLikedCards, removeLikedCards, addHeadingName } =
  cardSlice.actions;

export default cardSlice.reducer;
