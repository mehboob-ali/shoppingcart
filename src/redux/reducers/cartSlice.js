import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : 'cart',
        initialState : [],
        reducers:{
            addToCart : (state,action)=>{
                state.push(action.payload)
            },
            removeFromCart : ()=>{

            }

        }
    }
)

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;