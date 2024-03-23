import React, {useEffect} from 'react';

function Modal() {

   useEffect(()=>{
    //Jab first time component load ho
    console.log("Modal open hua");

    return () => {
        console.log("Modal close hua");
    }
   }, []) ;

  return (
    <div style={{width: "400px", height: "500px", backgroundColor: "yellow"}}>Modal</div>
  )
}

export default Modal