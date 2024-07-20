import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// configureStore ke andar sare reducers ate hai 
export const store = configureStore({
    reducer: authReducer
})