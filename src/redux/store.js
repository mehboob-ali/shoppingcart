import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice/cartSlice';
import appSlice from "./slice/appSlice";

export const store = configureStore({ reducer: { cart: cartSlice, app: appSlice } });