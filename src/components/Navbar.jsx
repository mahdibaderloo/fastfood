import { BiSolidNotification } from "react-icons/bi";
import { GoPerson, GoPersonFill } from "react-icons/go";
import {
  IoCart,
  IoCartOutline,
  IoFastFoodOutline,
  IoFastFoodSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { TbNotification } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between rounded-xl bg-white fixed left-0 right-0 bottom-0 p-4 m-2">
      <NavLink to="/dashboard">
        {({ isActive }) =>
          isActive ? <GoPersonFill size={34} /> : <GoPerson size={34} />
        }
      </NavLink>
      <NavLink to="/cart">
        {({ isActive }) =>
          isActive ? <IoCart size={34} /> : <IoCartOutline size={34} />
        }
      </NavLink>
      <NavLink to="/">
        {({ isActive }) =>
          isActive ? (
            <IoFastFoodSharp size={34} />
          ) : (
            <IoFastFoodOutline size={34} />
          )
        }
      </NavLink>
      <NavLink to="/notifications">
        {({ isActive }) =>
          isActive ? (
            <BiSolidNotification size={34} />
          ) : (
            <TbNotification size={34} />
          )
        }
      </NavLink>
      <NavLink to="/settings">
        {({ isActive }) =>
          isActive ? (
            <IoSettingsSharp size={34} />
          ) : (
            <IoSettingsOutline size={34} />
          )
        }
      </NavLink>
    </nav>
  );
}

export default Navbar;
