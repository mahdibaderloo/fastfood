import { FaLocationDot } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";
import { TbJewishStarFilled } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useTheme } from "../../store/themeStore.js";

function UserOptions() {
  const { theme } = useTheme();

  return (
    <ul className="bg-amber-50 dark:bg-amber-50/20 backdrop-blur-md m-4 mt-13 p-2 rounded-xl flex flex-wrap justify-between gap-2">
      <li className="bg-amber-100 dark:bg-neutral-800 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          {theme === "dark" ? (
            <MdManageAccounts size={56} color="#ffd230" />
          ) : (
            <MdManageAccounts size={56} color="#262626" />
          )}
        </p>
        <p className="text-sm dark:text-amber-300">Account</p>
      </li>
      <li className="bg-amber-100 dark:bg-neutral-800 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          {theme === "dark" ? (
            <PiHandbagFill size={50} color="#ffd230" />
          ) : (
            <PiHandbagFill size={50} color="#262626" />
          )}
        </p>
        <p className="text-sm dark:text-amber-300">Orders</p>
      </li>
      <li className="bg-amber-100 dark:bg-neutral-800 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          {theme === "dark" ? (
            <TbJewishStarFilled size={50} color="#ffd230" />
          ) : (
            <TbJewishStarFilled size={50} color="#262626" />
          )}
        </p>
        <p className="text-sm dark:text-amber-300">Favorites</p>
      </li>
      <li className="bg-amber-100 dark:bg-neutral-800 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          {theme === "dark" ? (
            <IoWallet size={50} color="#ffd230" />
          ) : (
            <IoWallet size={50} color="#262626" />
          )}
        </p>
        <p className="text-sm dark:text-amber-300">Wallet</p>
      </li>
      <li className="bg-amber-100 dark:bg-neutral-800 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          {theme === "dark" ? (
            <FaLocationDot size={50} color="#ffd230" />
          ) : (
            <FaLocationDot size={50} color="#262626" />
          )}
        </p>
        <p className="text-sm dark:text-amber-300">Address</p>
      </li>
      <li className="bg-amber-100 dark:bg-neutral-800 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          {theme === "dark" ? (
            <TfiHeadphoneAlt size={50} color="#ffd230" />
          ) : (
            <TfiHeadphoneAlt size={50} color="#262626" />
          )}
        </p>
        <p className="text-sm dark:text-amber-300">Support</p>
      </li>
    </ul>
  );
}

export default UserOptions;
