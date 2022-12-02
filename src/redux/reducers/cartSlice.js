import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartAsync=createAsyncThunk('cart/addToCartAsync',
      /**  @param arg {{ id : number }} */

    async(arg)=>{
        const productId=arg;
        console.log("in async" ,arg)
        const response=await fetch(`https://fakestoreapi.com/products/${arg}`);
        const formattedResoponse = await response.json();
        return formattedResoponse
    }
)

const initialState = {
    cart : [],

}
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                console.log("add to cart reducer")
            },
            removeFromCart: () => {
            }
        },
        extraReducers :     {
            [addToCartAsync.pending] : () => {
                console.log("pending")
            },
            [addToCartAsync.fulfilled] : (state, action) => {
                console.log("fullfileld and payload is",action.payload);
                return {...state, cart : [...state.cart,action.payload] }
            },
            [addToCartAsync.rejected]: ()=>{
                console.log("rejected");
            }
            
        },
    }
)

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;