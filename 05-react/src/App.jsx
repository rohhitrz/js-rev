import { useState } from 'react'
import './App.css'
import { Effects } from './components/Effects'
import UseCounter from '../customHooks/UseCounter'
function App() {
const {increment,decrement,reset,count}= UseCounter();
 

  return (
    <>
   
    {/* <Effects/> */}
    <p>{count}</p>
    <button onClick={increment}>+</button>
    {}
    <button onClick={decrement}>-</button>
    {}
    <button onClick={reset}>reset</button>
    </>
  )
}

export default App
