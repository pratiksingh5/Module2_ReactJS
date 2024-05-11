import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    // declare 
    addTodo : (todo) => {},
    editTodo : (todo) => {},
    toggleComplete: (id) => {},
    deleteTodo : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;

// context = Object 