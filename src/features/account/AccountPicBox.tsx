import { FaPen } from "react-icons/fa6";

import image1 from "../../assets/images/1.jpg";

function AccountPicBox() {
  return (
    <div className="w-full sm:w-80 sm:mx-auto relative">
      <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-full bg-amber-50 dark:bg-amber-300 shadow mx-auto overflow-hidden p-0.5">
        <img
          src={image1}
          alt="user-image"
          className="rounded-full shadow object-cover"
        />
      </div>
      <div className="bg-amber-50 dark:bg-amber-300 backdrop-blur-md w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center absolute left-[58%] bottom-1 lg:cursor-pointer">
        <FaPen size={18} color="#2c2c2c" />
      </div>
    </div>
  );
}

export default AccountPicBox;
