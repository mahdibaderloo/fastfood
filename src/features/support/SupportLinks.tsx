import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function SupportLinks() {
  return (
    <ul className="flex justify-evenly items-center text-amber-200 mt-4">
      <li className="flex flex-col items-center justify-center hover:text-amber-300 transition-all delay-100">
        <p className="bg-amber-200 w-fit p-2 rounded-full hover:bg-amber-300 transition-all delay-100">
          <FaTelegramPlane size={30} color="#262626" />
        </p>
        <span className="text-[16px]">Telegram</span>
      </li>
      <li className="flex flex-col items-center justify-center hover:text-amber-300 transition-all delay-100">
        <p className="bg-amber-200 w-fit p-2 rounded-full hover:bg-amber-300 transition-all delay-100">
          <BsTelephoneFill size={30} color="#262626" />
        </p>
        <span className="text-[16px]">Call</span>
      </li>
      <li className="flex flex-col items-center justify-center hover:text-amber-300 transition-all delay-100">
        <p className="bg-amber-200 w-fit p-2 rounded-full hover:bg-amber-300 transition-all delay-100">
          <MdEmail size={30} color="#262626" />
        </p>
        <span className="text-[16px]">Email</span>
      </li>
    </ul>
  );
}

export default SupportLinks;
