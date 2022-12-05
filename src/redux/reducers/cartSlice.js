import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartAsync = createAsyncThunk('cart/addToCartAsync',
    /**  @param arg {{ id : number }} */

    async (arg) => {
        const response = await fetch(`https://fakestoreapi.com/products/${arg}`);
        const formattedResoponse = await response.json();
        return formattedResoponse
    }
)

const initialState = {
    cart: [],

}
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            increaseQuantity: (state, action) => {
                const idIndex = state.cart.findIndex((st) => st.id == action.payload)
                state.cart[idIndex].quantity += 1;
            },

            decreaseQuantity: (state, action) => {
                const idIndex = state.cart.findIndex((st) => st.id == action.payload)
                if(state.cart[idIndex].quantity>1) state.cart[idIndex].quantity -= 1 ;
            },


            removeFromCart: (state, action) => {
                state.cart.splice(action.payload, 1)
            }
        },
        extraReducers: {
            [addToCartAsync.pending]: () => {
                console.log("pending");
            },

            [addToCartAsync.fulfilled]: (state, action) => {
                console.log("fullfilled");

                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }
            },
            [addToCartAsync.rejected]: (err) => {
                console.log("rejected", err);
            }

        },
    }
)

export const { increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;