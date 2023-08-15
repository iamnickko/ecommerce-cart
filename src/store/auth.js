import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
            console.log('logged in', state.isAuthenticated)        
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            console.log('logged out', state.isAuthenticated)
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer