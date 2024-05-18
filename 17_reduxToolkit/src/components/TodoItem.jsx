import { deleteTodo } from "../redux/features/todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoItem({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="flex border w-full border-black/10 px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black">
      <span className="outline-none w-full bg-transparent text-white">
        {item.text}{" "}
      </span>
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" 
      onClick = { () => handleDelete(item.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
