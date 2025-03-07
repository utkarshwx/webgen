import { createSlice } from "@reduxjs/toolkit"

const authState = {
    token: null,
    rtoken: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.rtoken = action.payload.rtoken;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.token = null;
            state.rtoken = null;
            state.isAuthenticated = false;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
    }
});

// Export the auth slice
export default authSlice.reducer;
export const authActions = authSlice.actions;