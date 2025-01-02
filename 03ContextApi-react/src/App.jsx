import React from 'react'
import './App.css'
// import { Header } from './Prop-Drilling/Header';
import { Header } from '../ContextApi/Header';
import UserContext from '../ContextApi/UserContext';

function App() {
  const user={name:"Rohit", age: 69 };

  return (
    // <>
    // <Header user={user}/>

    // </>

    <UserContext.Provider value={user}>
      <Header/>


    </UserContext.Provider>
   
  )
}

export default App
