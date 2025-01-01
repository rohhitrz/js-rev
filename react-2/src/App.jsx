import { useState } from 'react'
import './App.css'
import ParentComponent from './withoutUseCallback/ParentComponent'
import ParentComponentOptimized from './withUseCallback/ParentComponentOptimized'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Understanding useCallback hook</h1>
    {/* <ParentComponent/> */}
    <ParentComponentOptimized/>
    </>
  )
}

export default App
