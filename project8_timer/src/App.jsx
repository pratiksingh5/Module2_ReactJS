import React,  {useState} from 'react'
import Timer from './components/Timer'

function App() {

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(10);  


  const handleStartTimer = () => {
    setIsTimerRunning(true)
  }

  const handleCloseTimer = () => {
    setIsTimerRunning(false)
  }

  return (
    <div style={{padding: "200px"}}>
      <button onClick={handleStartTimer}>Start Timer</button>
      <br/>
      <br/>

      <button onClick={handleCloseTimer}>Close Timer</button>

      <div style={{marginTop: "50px"}}>
        {isTimerRunning ? <Timer time = {time} setTime = {setTime}/> : "Timer not started"}
      </div>
    </div>
  )
}

export default App