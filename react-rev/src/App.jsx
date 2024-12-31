import { useState } from 'react'
import './App.css'
import { UseFetch } from './CustomHooks/UseFetch'
// import Debouncing from './components/Debouncing'
// import SearchComponent from './LifeCycleMethods/SearchComponent'
// import {UseRefHook} from './Hooks/UseRef/UseRefHook'
// import UseRefPreviousState from './Hooks/UseRef/UseRefPreviousState'


function App() {
  // const [count, setCount] = useState(0)
  const {data,loading,error}= UseFetch('https://jsonplaceholder.typicode.com/posts');

  if(loading) return <p>loading...</p>
  if (error) return <p> Error: {error} </p>

  return (
    <> 
    {/* <Debouncing/> */}
    {/* <SearchComponent/> */}
    {/* <UseRefHook/> */}
    {/* <UseRefPreviousState/> */}

    <div>
      <h1>Posts</h1>
      <ul>{data.map((post)=>(
       <li key={post.id}>{post.title}</li>

      ))}</ul>
    </div>
    
    

    </>
  )
}

export default App
