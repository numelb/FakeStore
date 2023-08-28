import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
//import Login from "./pages/Login";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import About from "./pages/about";
import PageNotFound from "./pages/PageNotFound";
//import Register from "./pages/Register";
function App() {
  return (
    <div>
      <h1>RomanPizza</h1>
      {/* <Menu /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="menu" element={<Menu />} />

            <Route path="contact" element={<Contact />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
