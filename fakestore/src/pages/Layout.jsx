import { NavLink, Outlet } from "react-router-dom";
import "../app.css";
import { useContext } from "react";
import { CartContext } from "../context/cart";
export default function Layout() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <ul className="navbar-nav ">
          <li className="nav-item center">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <NavLink to="/Products/?filter=men's clothing">Men</NavLink>
        </button>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <NavLink to="/Products/?filter=women's clothing">Women</NavLink>
        </button>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <NavLink to="/Products/?filter=jewelery">Jewelry</NavLink>
        </button>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <NavLink to="/Products/?filter=electronics">Electronics</NavLink>
        </button>
        <div>
          <button type="submit" className="btn btn-outline-dark ">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-dark">
            <NavLink to="/register">Register</NavLink>
          </button>
        </div>
        <div>
          <NavLink to="/cart" type="submit" className="btn btn-outline-dark">
            Cart({cartItems.length})
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
