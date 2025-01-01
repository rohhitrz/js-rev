// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
// import { UseFetch } from './CustomHooks/UseFetch'
// import AppRouter from './Router/AppRouter'
// import UseMemoHook from './Hooks/UseMemoHook'
import ChildComponent from "./ReactMemo.jsx/ChildComponent";

// import Debouncing from './components/Debouncing'
// import SearchComponent from './LifeCycleMethods/SearchComponent'
// import {UseRefHook} from './Hooks/UseRef/UseRefHook'
// import UseRefPreviousState from './Hooks/UseRef/UseRefPreviousState'

function App() {
  // const [count, setCount] = useState(0)
  // const {data,loading,error}= UseFetch('https://jsonplaceholder.typicode.com/posts');

  // if(loading) return <p>loading...</p>
  // if (error) return <p> Error: {error} </p>

  const[count, setCount]=useState(0)
  const[text, setText]=useState("");

  const name=text || "Memoized text"

  return (
    <>

    <p>React.Memo Example</p>
    <p>The count is {count}</p>
    <button onClick={()=>setCount(count+1)}>Increase count</button>
    <br />
    <input 
    type="text"
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder="type something"
    
    />

    <ChildComponent name ={name}/>


      {/* <Debouncing/> */}
      {/* <SearchComponent/> */}
      {/* <UseRefHook/> */}
      {/* <UseRefPreviousState/> */}

      {/* <div>
      <h1>Posts</h1>
      <ul>{data.map((post)=>(
       <li key={post.id}>{post.title}</li>

      ))}</ul>
    </div> */}

      {/* <h1>Routes</h1> */}

      {/* <AppRouter/> */}

      {/* <UseMemoHook/> */}





    </>
  );
}

export default App;
