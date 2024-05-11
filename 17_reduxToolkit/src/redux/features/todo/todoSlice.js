import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id: 123,
        text: "Sample Todo"
    }]
}

const todoSlice = createSlice({
    name: "todo",
    initialState : initialState,
    reducers: {
        addTodo : () => {
            //defination
        }
    }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;