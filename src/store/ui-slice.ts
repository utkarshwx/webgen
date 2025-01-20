import { createSlice } from "@reduxjs/toolkit"
interface Notification {
    status: string;
    title: string;
    message: string;
}

const uiState: { cartVisible: boolean; notification: Notification | null } = {
    cartVisible: false,
    notification: null
};

const uiSlice=createSlice({
    name:"ui",
    initialState:uiState,
    reducers:{
        toggle(state){
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            }
        }
    }
})

export default uiSlice.reducer
export  const uiActions= uiSlice.actions