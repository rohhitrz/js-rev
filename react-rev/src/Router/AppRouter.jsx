import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Us Page</h2>;
}

function Contact() {
  return <h2>Contact us Page</h2>;
}

function AppRouter(){
    console.log("bk;");
    
    
    return(
    <Router>
        
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> |<Link to="/contact">Contact</Link>
            </nav>

         <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

        </Routes>


    </Router>

);

}
export default AppRouter;