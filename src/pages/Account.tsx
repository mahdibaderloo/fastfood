import Header from "../components/Header";
import { FaPen } from "react-icons/fa6";

import image1 from "../assets/images/1.jpg";
import { useModalStore } from "../store/modalStore";
import Modal from "../components/Modal";

function Account() {
  const { open } = useModalStore();

  function handleOpenLogoutModal() {
    open({ title: "Are you sure you want to logout?" });
  }

  function handleOpenSaveModal() {
    open({ title: "Are you sure you want to save the changes?" });
  }

  return (
    <>
      <Header
        pContent="ACCOUNT"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-22 sm:pt-24 h-screen overflow-y-scroll">
        <div className="w-full sm:w-80 sm:mx-auto relative">
          <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-full bg-amber-50 dark:bg-amber-300 shadow mx-auto overflow-hidden p-0.5">
            <img
              src={image1}
              alt=""
              className="rounded-full shadow object-cover"
            />
          </div>
          <div className="bg-amber-50 dark:bg-amber-300 backdrop-blur-md w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center absolute left-[58%] bottom-1">
            <FaPen size={18} color="#2c2c2c" />
          </div>
        </div>

        <form className="mt-8 p-2 bg-amber-50 dark:bg-amber-50/20 backdrop-blur-md rounded-2xl sm:w-80 sm:h-50 sm:mx-auto">
          <div className="p-2">
            <p className="mb-1 sm:mb-1.5 text-neutral-800 dark:text-amber-300">
              Name
            </p>
            <input
              type="text"
              placeholder="Mahdi Baderloo"
              className="bg-amber-200 dark:bg-neutral-800 text-neutral-800 dark:text-amber-300 p-2 sm:p-2.5 rounded-lg w-full outline-none border-none"
            />
          </div>
          <div className="p-2 sm:mt-1">
            <p className="mb-1 sm:mb-1.5 text-neutral-800 dark:text-amber-300">
              Phone
            </p>
            <input
              type="number"
              placeholder="0910*****98"
              className="bg-amber-200 dark:bg-neutral-800 text-neutral-800 dark:text-amber-300 p-2 sm:p-2.5 rounded-lg w-full outline-none border-none"
            />
          </div>
        </form>
        <div className="sm:w-80 sm:mx-auto sm:mt-6">
          <button
            className="w-full h-10 sm:h-11 mt-2 bg-amber-50 dark:bg-amber-50/20 text-amber-300 rounded-xl sm:text-lg sm:mx-auto"
            onClick={handleOpenSaveModal}
          >
            Save
          </button>
          <button
            className="w-full h-10 sm:h-11 mt-2 bg-amber-50 dark:bg-amber-50/20 text-amber-950 rounded-xl sm:text-lg sm:mx-auto"
            onClick={handleOpenLogoutModal}
          >
            Logout
          </button>
        </div>
        <Modal />
      </main>
    </>
  );
}

export default Account;
