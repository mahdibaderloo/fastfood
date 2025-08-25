import { GoPerson } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  IoCartOutline,
  IoFastFoodOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between rounded-xl bg-white fixed left-0 right-0 bottom-0 p-4 m-2">
      <NavLink to="/dashboard">
        <GoPerson size={30} />
      </NavLink>
      <NavLink to="/cart">
        <IoCartOutline size={30} />
      </NavLink>
      <NavLink to="/">
        <IoFastFoodOutline size={30} />
      </NavLink>
      <NavLink to="/notifications">
        <IoIosNotificationsOutline size={30} />
      </NavLink>
      <NavLink to="/settings">
        <IoSettingsOutline size={30} />
      </NavLink>
    </nav>
  );
}

export default Navbar;
