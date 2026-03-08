import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../store/themeStore.js";

import { FaLocationDot } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";
import { TbJewishStarFilled } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

interface Option {
  id: number;
  title: string;
  path: string;
  lightIcon: ReactNode;
  darkIcon: ReactNode;
  tabletSize: number;
}

const options: Option[] = [
  {
    id: 1,
    title: "Account",
    path: "/account",
    lightIcon: <MdManageAccounts size={56} color="#262626" />,
    darkIcon: <MdManageAccounts size={56} color="#ffd230" />,
    tabletSize: 60,
  },
  {
    id: 2,
    title: "Orders",
    path: "/orders",
    lightIcon: <PiHandbagFill size={50} color="#262626" />,
    darkIcon: <PiHandbagFill size={50} color="#ffd230" />,
    tabletSize: 60,
  },
  {
    id: 3,
    title: "Favorites",
    path: "/favorites",
    lightIcon: <TbJewishStarFilled size={50} color="#262626" />,
    darkIcon: <TbJewishStarFilled size={50} color="#ffd230" />,
    tabletSize: 60,
  },
  {
    id: 4,
    title: "Wallet",
    path: "/wallet",
    lightIcon: <IoWallet size={50} color="#262626" />,
    darkIcon: <IoWallet size={50} color="#ffd230" />,
    tabletSize: 60,
  },
  {
    id: 5,
    title: "Address",
    path: "/address",
    lightIcon: <FaLocationDot size={50} color="#262626" />,
    darkIcon: <FaLocationDot size={50} color="#ffd230" />,
    tabletSize: 60,
  },
  {
    id: 6,
    title: "Support",
    path: "/support",
    lightIcon: <TfiHeadphoneAlt size={50} color="#262626" />,
    darkIcon: <TfiHeadphoneAlt size={50} color="#ffd230" />,
    tabletSize: 60,
  },
];

function UserOptions() {
  const { theme } = useTheme();

  return (
    <div className="bg-amber-50 dark:bg-amber-50/20 backdrop-blur-md m-4 mt-13 lg:mt-6 p-2 rounded-xl sm:w-90 sm:h-67 sm:mx-auto flex flex-wrap justify-between gap-1 sm:gap-y-2">
      {options.map((option) => (
        <Link
          key={option.id}
          to={option.path}
          className="bg-amber-100 dark:bg-neutral-800 w-[31%] sm:w-[32%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow lg:cursor-pointer lg:hover:bg-amber-200 lg:dark:hover:bg-neutral-900 transition-all"
        >
          <p className="w-20 h-16 flex justify-center items-center">
            {theme === "dark" ? option.darkIcon : option.lightIcon}
          </p>
          <p className="text-sm sm:text-[1rem] dark:text-amber-300">
            {option.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default UserOptions;
