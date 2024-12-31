import { useState } from 'react'
import Debouncing from './components/Debouncing'
import SearchComponent from './LifeCycleMethods/SearchComponent'
import {UseRefHook} from './Hooks/UseRef/UseRefHook'
import UseRefPreviousState from './Hooks/UseRef/UseRefPreviousState'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* <Debouncing/> */}
    {/* <SearchComponent/> */}
    {/* <UseRefHook/> */}
    <UseRefPreviousState/>
    
    

    </>
  )
}

export default App
