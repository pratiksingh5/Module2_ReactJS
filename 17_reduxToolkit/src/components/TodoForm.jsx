import { useState } from "react";
import { addTodo } from "../redux/features/todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [task , setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Click Hua", task);
    dispatch(addTodo(task));
    setTask("")
  }
  return (
      <form className="flex" onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              onChange={(e) => {setTask(e.target.value)}}
              value={task}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#22a6b3] text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;