import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Login from "./pages/Login";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Product from "./components/Product";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AllProducts from "./components/AllProducts";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./components/Cart";
import { useState } from "react";

//import Register from "./pages/Register";
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="products" element={<AllProducts />} />

            <Route
              path="products/:id"
              element={
                <Product cartItems={cartItems} setCartItems={setCartItems} />
              }
            />

            <Route path="contact" element={<Contact />} />

            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="about" element={<About />} />
            <Route path="products/:id/edit" element={<editProduct />} />
            <Route path="login" element={<Login />} />
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
