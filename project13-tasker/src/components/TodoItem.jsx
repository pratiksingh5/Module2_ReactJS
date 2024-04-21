import { useTodo } from "../contexts";
import { useState } from "react";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoTask, setTodoTask] = useState(todo.task);
  const { editTodo, toggleComplete, deleteTodo } = useTodo();

  const updateTodo = () => {
    const updatedTodo = { ...todo, task: todoTask };
    editTodo(updatedTodo);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-green-400" : "bg-[#f1f1f1]"
      } "`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg px-4 ${
          isTodoEditable ? "border-black/10" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoTask}
        onChange={(e) => {
          setTodoTask(e.target.value);
        }}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isTodoEditable) {
            updateTodo();
            setIsTodoEditable(false);
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
      >
        {isTodoEditable ? "🗃️" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" onClick={(e) =>{ deleteTodo(todo.id)}}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
