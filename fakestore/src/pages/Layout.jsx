import { NavLink, Outlet } from "react-router-dom";
import "../app.css";
export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
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
          Search
        </button>

        <div>
          <button type="submit" className="btn btn-outline-dark">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-dark">
            Register
          </button>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-dark">
            Cart(0)
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
