import { NavLink } from "react-router-dom";

function DesktopNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Menu</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
