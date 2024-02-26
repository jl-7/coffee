import { useState } from 'react'
import coffeePic from './assets/coffee.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <div className='m-8 flex justify-center'>
        <a onClick={() => setCount((count) => count + 1)}>
          <img className='h-80 hover:shadow-2xl shadow-slate-950 active:p-px rounded-2xl' src={coffeePic} />
        </a>
      </div>

      <div className = "flex justify-center">
        <div>You've had </div>
        <div className='text-6xl'>
          {count}
        </div>
        <div> coffees today</div>
      </div>  
    </div>
  )
}

export default App
