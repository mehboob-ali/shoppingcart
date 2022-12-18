import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    btnState: false,
    isShowCart: false
}
const appSlice = createSlice(
    {
        name: 'app',
        initialState,
        reducers: {
            setBtnState: (state, action) => {
                state.btnState = action.payload;
            },
            setIsShowCart: (state, action) => {
                state.isShowCart = action.payload;
            }

        }

    }

)

export const { setBtnState, setIsShowCart } = appSlice.actions;
export default appSlice.reducer;
