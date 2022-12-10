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
                console.log('action payload in app slice', action.payload);
                state.btnState = action.payload;
            },
            setIsShowCart: (state, action) => {
                console.log('showcart reducer', state)
                state.isShowCart = action.payload;
            }

        }

    }

)

export const { setBtnState, setIsShowCart } = appSlice.actions;
export default appSlice.reducer;
