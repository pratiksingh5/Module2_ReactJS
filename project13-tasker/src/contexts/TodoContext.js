import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo : (todo) => {},
    editTodo : (todo) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;

// context = Object 