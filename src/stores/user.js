import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: { id: 0, tcno: "", password: "", balance: 0, name: "", surname: "" },
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },
        setLogin: (state) => {
            console.log("setlogin func " + state);
            if (state.isLoggedIn) {
                state.isLoggedIn = false;
            } else {
                state.isLoggedIn = true;
            }
        },
        withdraw: (state, action) => {
            state.user.balance -= action.payload.quantity;
        }
    }
})

export const { setUserData, setLogin, withdraw } = userSlice.actions

export default userSlice.reducer