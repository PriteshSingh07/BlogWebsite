import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'
import postReducer from './postSlice'
const store = configureStore({
    // add postReducer so that bar bar webRequest na marna pade
    reducer: {
        auth : authReducer,
        posts : postReducer,
    }
})

export default store