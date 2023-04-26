import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  total:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")).filter((item) => item !== null)
          .length
      : 0,
  amount:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart"))
          .filter((item) => item !== null)
          .reduce((acc, item) => {
            return acc + item.price;
          }, 0)
      : 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      state.cartItems[action.payload.id - 1] = action.payload;
      state.total = JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item !== null
      ).length;
      state.amount += action.payload.price;
    },
    removeItem(state, action) {
      state.amount -= state.cartItems[action.payload - 1].price;
      state.cartItems[action.payload - 1] = null;
      state.total = JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item !== null
      ).length;
    },
  },
});

export const { clearCart, addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
