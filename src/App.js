import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Products from "./pages/productPage/Products";
import Contact from "./pages/contactPage/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Products />} path="/products" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
