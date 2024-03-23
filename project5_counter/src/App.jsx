import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
   setCount((pichlaWalaState) => pichlaWalaState + 1);
   setCount((pichlaWalaState) => pichlaWalaState + 1);
   setCount((pichlaWalaState) => pichlaWalaState + 1);
   setCount((pichlaWalaState) => pichlaWalaState + 1);

  }

  const handleDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
      <button onClick={handleDecrease}>
          Remove 
        </button>
        <span style={{padding: "10px 50px",  backgroundColor: "#f1f1f1", margin: "0 10px"}}>{count}</span>
        <button onClick={handleIncrease}>
          Add 
        </button>

 
      </div>
    </>
  )
}

export default App
