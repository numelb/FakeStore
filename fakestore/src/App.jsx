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
import About from "./pages/about";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
//import Register from "./pages/Register";
function App() {
  return (
    <div>
      <Header />
      <button className="lowerright">SIGN IN</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="products" element={<Products />} />

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
