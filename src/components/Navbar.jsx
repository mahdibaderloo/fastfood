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
    <nav className="flex justify-between rounded-xl bg-white fixed left-0 right-0 bottom-0 p-2 m-2">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 rounded-xl transition-all duration-500"
            : "p-2"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <GoPersonFill size={34} color="#2c2c2c" />
          ) : (
            <GoPerson size={34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 rounded-xl transition-all duration-500"
            : "p-2"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <IoCart size={34} color="#2c2c2c" />
          ) : (
            <IoCartOutline size={34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 rounded-xl transition-all duration-500"
            : "p-2"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <IoFastFoodSharp size={34} color="#2c2c2c" />
          ) : (
            <IoFastFoodOutline size={34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 rounded-xl transition-all duration-500"
            : "p-2"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <BiSolidNotification size={34} color="#2c2c2c" />
          ) : (
            <TbNotification size={34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 rounded-xl transition-all duration-500"
            : "p-2"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <IoSettingsSharp size={34} color="#2c2c2c" />
          ) : (
            <IoSettingsOutline size={34} color="#2c2c2c" />
          )
        }
      </NavLink>
    </nav>
  );
}

export default Navbar;
