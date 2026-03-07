import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Item {
  item: {
    id: number;
    title: string;
    path: string;
    activeIcon: ReactNode;
    notActiveIcon: ReactNode;
  };
}

function NavbarLinkItem({ item }: Item) {
  console.log(item);

  return (
    <li
      title={item.title}
      className="w-8 h-8 p-1.5 rounded-full bg-amber-100 flex justify-center items-center cursor-pointer"
    >
      <NavLink to={item.path}>
        {({ isActive }) => (isActive ? item.activeIcon : item.notActiveIcon)}
      </NavLink>
    </li>
  );
}

export default NavbarLinkItem;
