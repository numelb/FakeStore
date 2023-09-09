import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import Login from "./pages/Login";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AllProducts from "./components/AllProducts";
import About from "./pages/About";
import SingleProduct from "./components/SingleProduct";
//import Register from "./pages/Register";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="products" element={<AllProducts />} />

            <Route path="products/:id" element={<SingleProduct />} />

            <Route path="contact" element={<Contact />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
