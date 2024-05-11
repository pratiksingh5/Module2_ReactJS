import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice"

// configureStore ke andar sare reducers ate hai 
export const store = configureStore({
    reducer: todoReducer
})