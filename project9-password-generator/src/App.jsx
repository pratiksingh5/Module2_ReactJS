import  { useState } from "react";


function App() {

  const [length, setLength] = useState(14);
  const [password, setPassword] = useState("qwerty");
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [specialCharAllowed , setSpecialCharAllowed] = useState(false);


  const handleLengthChange = (event) => {
    setLength(event.target.value);
  }

  const generatePassword = ()=> {
    //logic to change the password
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) {
      str += "0123456789"
    }

    if(specialCharAllowed) {
      str += "!@#$%&"
    }

    for(let i = 0; i < length; i++){
      let randomNumber = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNumber)
    }
     setPassword(pass)
  }


  return (
    <div className="p-20 h-screen bg-slate-800 text-white">
      <div className="w-2/4 bg-black mx-auto p-20 rounded-lg">
        <h1 className="text-center font-bold">Password Generator App</h1>
        <div className="p-10 flex flex-col gap-10">
          <div className="flex gap-4">
          <input type="text" className="h-10 text-slate-800 text-lg px-4" value={password}/>
          <button className="py-2 px-8 bg-blue-600 rounded-lg" onClick={generatePassword}>Generate</button>
          </div>

          <div className="flex gap-6">
            <label htmlFor="length" className="mr-8">
              Length
            </label>
            <input type="range" min={6} max={14} id="length" onChange={ (e) => { handleLengthChange(e)} } />
            <span className="text-lg">{length}</span>
          </div>

          <div className="flex items-center">
            <label htmlFor="number" className="mr-8">
              Number
            </label>
            <input type="checkbox" id="number" className="h-8 w-8" onChange={()=> {
              setNumberAllowed((prev) => !prev)
            }} />
          </div>

          <div className="flex items-center">
            <label htmlFor="character" className="mr-8">
              Special character
            </label>
            <input type="checkbox" id="character" className="h-8 w-8" onChange={()=> {
              setSpecialCharAllowed((prev) => !prev)
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
