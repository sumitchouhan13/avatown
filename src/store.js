import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import cardReducer from "./features/cards/cardsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cards: cardReducer,
  },
});
