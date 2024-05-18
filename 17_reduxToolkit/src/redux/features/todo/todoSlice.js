import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            //definition
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            //definition
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
