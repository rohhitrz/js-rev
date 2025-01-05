import React, {useState,useEffect,useRef} from 'react'

 const PrevCount = () => {
    const[count,setCount]=useState(0);
    const prevCountRef=useRef(0);

    useEffect(()=>{
        prevCountRef.current=count;


    },[count]);



  return (
    <>    
    <div>PrevCount</div>
    <div>Count: {count}</div>
    <div>Previous Count: {prevCountRef.current}</div>
    <button onClick={()=>setCount(count+1)}>Increment</button>



</>

  )
}

export default PrevCount;
