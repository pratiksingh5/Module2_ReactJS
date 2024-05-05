import React, {useState, useEffect} from 'react';

function Timer({time, setTime}) {

 //ratt lo
 useEffect(()=>{
    const timer = setInterval(()=> {
        setTime((prevTime) => prevTime - 1)
       }, 1000);
   console.log("Mounting",)

   return () => {
    console.log("destroyed");
    setTime(10)
   }
 }, [])


  return (
    <div>Timer: {time}</div>
  )
}

export default Timer