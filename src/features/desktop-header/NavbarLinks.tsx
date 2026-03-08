import { GoPerson, GoPersonFill } from "react-icons/go";
import {
  IoCart,
  IoCartOutline,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { BiSolidNotification } from "react-icons/bi";
import { TbNotification } from "react-icons/tb";
import NavbarLinkItem from "./NavbarLinkItem";

const links = [
  {
    id: 1,
    title: "Cart",
    path: "/cart",
    activeIcon: <IoCart size={34} color="#2c2c2c" />,
    notActiveIcon: <IoCartOutline size={34} color="#2c2c2c" />,
  },
  {
    id: 2,
    title: "Profile",
    path: "/dashboard",
    activeIcon: <GoPersonFill size={34} color="#2c2c2c" />,
    notActiveIcon: <GoPerson size={34} color="#2c2c2c" />,
  },
  {
    id: 3,
    title: "Notifications",
    path: "/notifications",
    activeIcon: <BiSolidNotification size={34} color="#2c2c2c" />,
    notActiveIcon: <TbNotification size={34} color="#2c2c2c" />,
  },
  {
    id: 4,
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
          <NavbarLinkItem key={link.id} item={link} />
        ))}
      </ul>
    </nav>
  );
}

export default NavbarLinks;
