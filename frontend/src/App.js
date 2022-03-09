import React from "react";
import './App.css';
import Navbar from "./component/layout/Header/Navbar"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"



function App() {
  return  (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
       </Routes>
     
      {/* <Home/> */}
      {/* <Route exact path= "/" component={Home} /> */}
      <Footer />
    </Router>
  );
  
}

export default App;
