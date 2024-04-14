import { useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  // const todo = {
  //   id : 5,
  //   task: "update",
  //   isCompleted: false
  // }

  const editTodo = (todo) => {
    console.log("edit hua");
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
    // setTodos((prevTodos) =>  
    //   prevTodos.map((oldTodo) => (oldTodo.id === todo.id ? todo : oldTodo));
    //   // pehle pata krna pdega hai ki kise update krna hai? 
    //   console.log("prevTodos", prevTodos)

    //   // prevTodos.map((item) => {
    //   //   // console.log("item", item);
    //   //   // console.log("item ki id", item.id);
    //   //   // console.log("todo ki id", todo.id);
    //   //  return ( item.id === todo.id ? todo : item)
    //   // })

    // });
  };


  console.log("todos", todos)

  // todo = {
  //   task: "Hello Task",
  //   isCompleted: false,
  //   id : 123
  // }

  // const sampleTodos = [
  //   {
  //     id: 1,
  //     task: "Sample Task 1",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 1,
  //     task: "Sample Task 2",
  //     isCompleted: true,
  //   },
  // ];

  return (
    <TodoProvider value={{ todos, addTodo , editTodo}}>
      <div className="bg-[#000] min-h-screen w-full flex">
        <div className="left w-[500px] bg-red-400 h-screen">
          <img
            src="https://images.pexels.com/photos/6687773/pexels-photo-6687773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            My Tasker
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
