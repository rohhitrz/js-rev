import { useState } from 'react'
import Debouncing from './components/Debouncing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Debouncing/>
    </>
  )
}

export default App
