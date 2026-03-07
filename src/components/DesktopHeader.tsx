import pizzaIcon from "../assets/images/pizza.svg";
import pizzaDarkIcon from "../assets/images/pizza-dark.svg";
import { useTheme } from "../store/themeStore";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";
import { useFoods } from "../hooks/useFoods";
import { GoPerson, GoPersonFill } from "react-icons/go";
import {
  IoCart,
  IoCartOutline,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { BiSolidNotification } from "react-icons/bi";
import { TbNotification } from "react-icons/tb";
import { BsMoonStarsFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";

const links = [
  {
    id: 1,
    isPath: true,
    title: "Cart",
    path: "/cart",
    activeIcon: <IoCart size={34} color="#2c2c2c" />,
    notActiveIcon: <IoCartOutline size={34} color="#2c2c2c" />,
  },
  {
    id: 2,
    isPath: true,
    title: "Profile",
    path: "/dashboard",
    activeIcon: <GoPersonFill size={34} color="#2c2c2c" />,
    notActiveIcon: <GoPerson size={34} color="#2c2c2c" />,
  },
  {
    id: 3,
    isPath: true,
    title: "Notifications",
    path: "/notifications",
    activeIcon: <BiSolidNotification size={34} color="#2c2c2c" />,
    notActiveIcon: <TbNotification size={34} color="#2c2c2c" />,
  },
  {
    id: 4,
    isPath: true,
    title: "Settings",
    path: "/settings",
    activeIcon: <IoSettingsSharp size={34} color="#2c2c2c" />,
    notActiveIcon: <IoSettingsOutline size={34} color="#2c2c2c" />,
  },
];

function DesktopHeader() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { data: foods } = useFoods();

  return (
    <header className="p-2 py-4 fixed right-0 left-0 z-50 bg-amber-300 dark:bg-neutral-800">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="text-xl dark:text-amber-300">P!ZZ</p>
          {theme === "dark" ? (
            <img src={pizzaDarkIcon} alt="pizza" className="w-3.5 rotate-180" />
          ) : (
            <img src={pizzaIcon} alt="pizza" className="w-3.5 rotate-180" />
          )}
        </div>
        <div className="flex items-center ml-4 gap-1">
          <div
            className="w-8 h-8 p-1.5 rounded-full bg-amber-100 flex justify-center items-center cursor-pointer"
            onClick={() => toggleTheme()}
          >
            {theme === "dark" ? (
              <BsMoonStarsFill size={34} color="#2c2c2c" />
            ) : (
              <RiSunLine size={34} color="#2c2c2c" />
            )}
          </div>
          <Search items={foods ?? []} />
          <Filter />
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-1">
            {links.map((link) => (
              <li
                key={link.id}
                title={link.title}
                className="w-8 h-8 p-1.5 rounded-full bg-amber-100 flex justify-center items-center cursor-pointer"
              >
                <NavLink to={link.path}>
                  {({ isActive }) =>
                    isActive ? link.activeIcon : link.notActiveIcon
                  }
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default DesktopHeader;
