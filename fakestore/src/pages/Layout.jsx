import { NavLink, Outlet } from "react-router-dom";
import "../app.css";
export default function Layout() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li class="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
