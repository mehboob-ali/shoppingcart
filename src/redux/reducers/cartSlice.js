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
            addToCart: (state, action) => {
            },
            removeFromCart: () => {
            }
        },
        extraReducers :     {
            [addToCartAsync.pending] : () => {
                console.log("pending")
            },

            [addToCartAsync.fulfilled] : (state, action) => {
                console.log("fullfileld");
                if(state.cart.quantity===action.payload){
                    return {...state, cart: {...state.cart, quantity: (quantity)=>quantity+1}}
                    console.log("running.....")
                }
                return {...state, cart: [...state.cart, {...action.payload, quantity: 1}] }
            },
            [addToCartAsync.rejected]: (err)=>{
                console.log("rejected",err);
            }
            
        },
    }
)

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;