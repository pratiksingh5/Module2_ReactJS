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
            //definition
        },
        deleteTodo: () => {
            //definition
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;