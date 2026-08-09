import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import Followus from "./pages/followus/Followus";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/News" element={<News />} />
        <Route path="/Followus" element={<Followus />} />
      </Routes>
    </>
  );
};

export default App;
