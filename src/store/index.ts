import {configureStore} from '@reduxjs/toolkit'
import uiReducer from './ui-slice';
import authReducer from './auth-slice';

const store=configureStore({
    reducer:{
        uiState:uiReducer,
        authState:authReducer
    }
})

export default store