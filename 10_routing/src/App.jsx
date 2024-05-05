import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter , Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}  /> 
        <Route path="about" element = {<About/>} /> 
        <Route path="services" element = {<Services/>} /> 
        <Route path="contact" element = {<Contact/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
