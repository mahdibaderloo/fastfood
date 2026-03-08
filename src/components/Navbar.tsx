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
  const width = window.innerWidth;

  return (
    <nav className="flex justify-between rounded-xl sm:rounded-full bg-amber-50 dark:bg-amber-50 shadow-[0_0_5px_#0000003d] fixed sm:w-[18rem] md:w-[20rem] z-50 sm:mx-auto left-0 right-0 bottom-0 sm:bottom-1 p-2 m-2">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-all duration-500"
            : "p-2 sm:p-2.5"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <GoPersonFill size={width > 640 ? 38 : 34} color="#2c2c2c" />
          ) : (
            <GoPerson size={width > 640 ? 38 : 34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-all duration-500"
            : "p-2 sm:p-2.5"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <IoCart size={width > 640 ? 38 : 34} color="#2c2c2c" />
          ) : (
            <IoCartOutline size={width > 640 ? 38 : 34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-all duration-500"
            : "p-2 sm:p-2.5"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <IoFastFoodSharp size={width > 640 ? 38 : 34} color="#2c2c2c" />
          ) : (
            <IoFastFoodOutline size={width > 640 ? 38 : 34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-all duration-500"
            : "p-2 sm:p-2.5"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <BiSolidNotification size={width > 640 ? 39 : 34} color="#2c2c2c" />
          ) : (
            <TbNotification size={width > 640 ? 39 : 34} color="#2c2c2c" />
          )
        }
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive
            ? "bg-amber-300 p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-all duration-500"
            : "p-2 sm:p-2.5"
        }
      >
        {({ isActive }) =>
          isActive ? (
            <IoSettingsSharp size={width > 640 ? 38 : 34} color="#2c2c2c" />
          ) : (
            <IoSettingsOutline size={width > 640 ? 38 : 34} color="#2c2c2c" />
          )
        }
      </NavLink>
    </nav>
  );
}

export default Navbar;
