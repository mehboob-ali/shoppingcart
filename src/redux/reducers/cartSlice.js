import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartAsync=createAsyncThunk('cart/addToCartAsync',
      /**  @param arg {{ id : number }} */

    async(arg)=>{
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
            increaseQuantity: (state, action) => { 
                const idIndex = state.cart.findIndex((st)=>st.id== action.payload) 
                state.cart[idIndex].quantity+=1; },
            removeFromCart: () => {
            }
        },
        extraReducers :     {
            [addToCartAsync.pending] : () => {
                console.log("pending");
            },

            [addToCartAsync.fulfilled] : (state, action) => {
               console.log("fullfilled");

                return {...state, cart: [...state.cart, {...action.payload, quantity: 1}] }
            },
            [addToCartAsync.rejected]: (err)=>{
                console.log("rejected",err);
            }
            
        },
    }
)

export const { increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;