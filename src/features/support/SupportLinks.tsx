import { ReactNode } from "react";

import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

interface Link {
  id: number;
  title: string;
  icon: ReactNode;
  link: string;
}

const links: Link[] = [
  {
    id: 1,
    title: "Telegram",
    icon: (
      <FaTelegramPlane size={30} color="#262626" className="xl:w-6 xl:h-6" />
    ),
    link: "",
  },
  {
    id: 2,
    title: "Call",
    icon: (
      <BsTelephoneFill size={30} color="#262626" className="xl:w-6 xl:h-6" />
    ),
    link: "",
  },
  {
    id: 3,
    title: "Email",
    icon: <MdEmail size={30} color="#262626" className="xl:w-6 xl:h-6" />,
    link: "",
  },
];

function SupportLinks() {
  return (
    <ul className="flex lg:flex-col xl:flex-row xl:mx-auto lg:gap-3 xl:gap-12 2xl:gap-16 justify-evenly lg:justify-center items-center text-amber-200 mt-4 lg:ml-4">
      {links.map((link) => (
        <li
          key={link.id}
          className="flex flex-col items-center justify-center sm:gap-1 hover:text-amber-300 transition-all lg:cursor-pointer"
        >
          <p className="bg-amber-200 w-fit p-2 sm:p-3 rounded-full hover:bg-amber-300 transition-all">
            {link.icon}
          </p>
          <span className="text-[0.6rem] sm:text-[0.75rem] lg:text-[0.6rem] xl:text-[0.7rem]">
            {link.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SupportLinks;
