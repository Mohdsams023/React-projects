import React from 'react'
import { useState } from 'react';

const App = () => {
    const [Counter, setCounter] = useState(0)
   // let Counter = 4;
    const Addvalue = () => {   
        if (Counter < 20) {
            setCounter(Counter + 1)
        }  
       
       
    };

    const Removevalue = () => {
        if (Counter > 0) {
            setCounter(Counter - 1)
        }
        
         
     }
  return (
    <div className='flex items-center flex-col justify-center m-10'>
      <h1>React Hooks</h1>
      <h2>Counter Value : {Counter}</h2>
      <button onClick={Addvalue} className='bg-black text-white p-2 m-3'>Add Value</button>
      <button onClick={Removevalue} className='bg-black text-white p-2 m-3'>Decrease Value</button>
    </div>
  )
}

export default App
