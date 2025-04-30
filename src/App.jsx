import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import './index.css'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginSignup from "./pages/LoginSignup";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all_product" element={<AllProducts />}/>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
 