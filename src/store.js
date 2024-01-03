import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./stores/user"

export const store = configureStore({
    reducer: {
        user: userSlice, // state.user.user kısmındaki ilk user buradakidir, son user state içerisindeki değişkendir.
    },
})