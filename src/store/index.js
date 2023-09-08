import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import foodsReducer, { fetchFoods } from "../slices/foodSlice";
import cartReducer, { getTotals } from "../slices/cartSlice";
import { foodApi } from "../slices/foodApi";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    cart: cartReducer,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
});

store.dispatch(fetchFoods());
store.dispatch(getTotals());
