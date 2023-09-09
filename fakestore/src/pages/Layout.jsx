import { NavLink, Outlet } from "react-router-dom";
import "../app.css";
export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
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
      </nav>
      <Outlet />
    </>
  );
}
