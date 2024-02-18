import { useState } from 'react'

function App() {
  
  const [Color, setColor] = useState('') 
  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: Color}}>

      <div className='fixed w-full flex flex-wrap justify-center bottom-10 inset-x px-2'>
          <div className='flex justify-center flex-wrap bg-white rounded-2xl shadow-lg p-2 '>
              <button onClick={() => setColor('red')} style={{backgroundColor: 'red'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>Red</button>
              <button onClick={() => setColor('Green')} style={{backgroundColor: 'Green'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>Green</button>
              <button onClick={() => setColor('crimson')} style={{backgroundColor: 'crimson'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>crimson</button>
              <button onClick={() => setColor('purple')} style={{backgroundColor: 'purple'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>purple</button>
              <button onClick={() => setColor('black')} style={{backgroundColor: 'black'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>black</button>
              <button onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>orange</button>
              <button onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>blue</button>
              <button onClick={() => setColor('skyblue')} style={{backgroundColor: 'skyblue'}} className=' m-2 p-2 px-3 cursor-pointer rounded-lg text-white shadow-lg'>skyblue</button>
          </div>
      </div>
   </div>
  )

}


export default App
