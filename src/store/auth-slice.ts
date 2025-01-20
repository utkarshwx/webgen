import { createSlice } from "@reduxjs/toolkit"

const authState = {
    token: null,
    refreshtoken: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.refreshtoken = action.payload.refreshtoken;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.token = null;
            state.refreshtoken = null;
            state.isAuthenticated = false;
        }
    }
});

// Export the auth slice
export default authSlice.reducer;
export const authActions = authSlice.actions;