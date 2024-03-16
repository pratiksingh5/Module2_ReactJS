import { useState } from "react";

import "./App.css";

const sampleTodos = ["Hello", "item2", "Namaster"];

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleItem = (e) => {
    // console.log("key press hua", e.target.value)
    if (e.target.value !== "") {
      setItem(e.target.value);
    }
  };

  const handleAddItems = () => {
    if (item !== "") {
      setTodos([...todos, item]);
      setItem("");
    } else {
      alert("Please Write something");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          style={{ margin: "0 10px", height: "32px", borderRadius: "5px" }}
          onChange={(e) => handleItem(e)}
        />
        <button onClick={handleAddItems}>Add</button>
      </div>
      <div>
        <h2>Todos</h2>
        <br />
        <ol>
          {todos.map((todo, i) => {
            return <li key={i}>{todo}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
