import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isModelOpen, setIsModelopen] = useState(false);

  const handlePopUpOpen = () => {
    setIsModelopen(true)
  }

  const handlePopUpClose = () => {
    setIsModelopen(false)
  }

  return (
    <div className="app">
      <div className="left">
        <h1>Life Cycle Methods</h1>
        <button onClick={handlePopUpOpen}>Open Popup</button>
        <br/>
        <br/>
        
        <button onClick={handlePopUpClose}>Close Popup</button>

      </div>
      <div className="right">
        {isModelOpen ?   <Modal /> : ""}
      </div>
    </div>
  );
}

export default App;
