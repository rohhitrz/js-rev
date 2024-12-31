import { useState } from 'react'
import Debouncing from './components/Debouncing'
import SearchComponent from './LifeCycleMethods/SearchComponent'
import {UseRefHook} from '../src/components/UseRefHook'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* <Debouncing/> */}
    {/* <SearchComponent/> */}
    <UseRefHook/>
    
    

    </>
  )
}

export default App
