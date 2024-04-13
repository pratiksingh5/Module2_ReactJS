import { useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const sampleTodos = [
    {
      id: 1,
      task: "Sample Task 1",
      isCompleted: false,
    },
    {
      id: 1,
      task: "Sample Task 2",
      isCompleted: true,
    },
  ];

  return (
    <TodoProvider value={{ sampleTodos }}>
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
            {sampleTodos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo = {todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
