import { FaLocationDot } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";
import { TbJewishStarFilled } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function UserStatistics() {
  return (
    <ul className="bg-amber-50 m-4 mt-20 p-2 rounded-xl flex flex-wrap justify-between gap-2">
      <li className="bg-amber-100 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          <MdManageAccounts size={56} color="#262626" />
        </p>
        <p className="text-sm">Account</p>
      </li>
      <li className="bg-amber-100 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          <PiHandbagFill size={50} color="#262626" />
        </p>
        <p className="text-sm">Orders</p>
      </li>
      <li className="bg-amber-100 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          <TbJewishStarFilled size={50} color="#262626" />
        </p>
        <p className="text-sm">Favorites</p>
      </li>
      <li className="bg-amber-100 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          <IoWallet size={50} color="#262626" />
        </p>
        <p className="text-sm">Wallet</p>
      </li>
      <li className="bg-amber-100 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          <FaLocationDot size={50} color="#262626" />
        </p>
        <p className="text-sm">Address</p>
      </li>
      <li className="bg-amber-100 w-[31%] p-2 rounded-lg flex flex-col justify-center items-center gap-2 shadow">
        <p className="w-20 h-16 flex justify-center items-center">
          <TfiHeadphoneAlt size={50} color="#262626" />
        </p>
        <p className="text-sm">Support</p>
      </li>
    </ul>
  );
}

export default UserStatistics;
