import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './reducers/cartSlice';
import appSlice from "./reducers/appSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer =combineReducers({
    app : appSlice,
    cart : cartSlice,
})

export const store = configureStore({reducer : {  cart : cartSlice, app : appSlice }}  );