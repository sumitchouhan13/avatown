import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
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
      state.cartItems.push(action.payload);
      //   state.amount += action.payload.amount;
      state.total += 1;
    },
  },
});

export const { clearCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
