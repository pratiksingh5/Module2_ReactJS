import { useState, useContext } from "react";
import { useTodo } from "../contexts";
// import { TodoContext } from "../contexts";

// todos -> Array of Objects
// todo -> Object
// task -> string
function TodoForm() {
  const [task, setTask] = useState("");
  const { addTodo } = useTodo();

  //   const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      return;
    }
    // Math.floor(Math.random() * 100000)
    const todo = { id: Date.now(), task: task, isCompleted: false };
    // console.log("todo", todo)
    addTodo(todo);
    setTask("");
  };

  return (
    <form
      className="flex"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#22a6b3] text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
