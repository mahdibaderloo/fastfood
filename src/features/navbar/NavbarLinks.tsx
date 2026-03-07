import { GoPerson, GoPersonFill } from "react-icons/go";
import {
  IoCart,
  IoCartOutline,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { BiSolidNotification } from "react-icons/bi";
import { TbNotification } from "react-icons/tb";
import { NavLink } from "react-router-dom";

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

function NavbarLinks() {
  return (
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
  );
}

export default NavbarLinks;
