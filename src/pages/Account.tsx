import Header from "../components/Header";
import { FaPen } from "react-icons/fa6";

import image1 from "../data/images/1.jpg";

function Account() {
  return (
    <>
      <Header pContent="ACCOUNT" />
      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <div className="w-full relative">
          <div className="w-20 h-20 rounded-full bg-neutral-800 dark:bg-amber-300 shadow mx-auto overflow-hidden p-0.5">
            <img
              src={image1}
              alt=""
              className="rounded-full shadow object-cover"
            />
          </div>
          <div className="bg-amber-50 dark:bg-amber-300 backdrop-blur-md w-5 h-5 rounded-full flex items-center justify-center absolute left-[58%] bottom-1">
            <FaPen size={18} color="#2c2c2c" />
          </div>
        </div>

        <form></form>
      </main>
      <div className="w-full h-16"></div>
    </>
  );
}

export default Account;
