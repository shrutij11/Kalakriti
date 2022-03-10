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
import ProductDetails from "./component/Product/ProductDetails.js"


function App() {
  return  (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
       {/* <Route exact path="/" component={Home} /> */}
       <Route path="/product/:id" element={<ProductDetails/>} />
       {/* <Route exact path="/product/:id" component={ProductDetails} /> */}
       </Routes>
      <Footer />
    </Router>
  );
  
}

export default App;
