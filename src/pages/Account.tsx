import Header from "../components/Header";
import { FaPen } from "react-icons/fa6";

import image1 from "../data/images/1.jpg";
import { useModalStore } from "../store/modalStore";
import Modal from "../components/Modal";

function Account() {
  const { isOpen, close, open, title } = useModalStore();

  function handleOpenLogoutModal() {
    open({ title: "Are you sure you want to logout?" });
  }

  function handleOpenSaveModal() {
    open({ title: "Are you sure you want to save the changes?" });
  }

  return (
    <>
      <Header pContent="ACCOUNT" />
      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <div className="w-full relative">
          <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-300 shadow mx-auto overflow-hidden p-0.5">
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

        <form className="mt-8 p-2 bg-amber-50 dark:bg-amber-50/20 backdrop-blur-md rounded-2xl">
          <div className="p-2">
            <p className="mb-1 text-neutral-800 dark:text-amber-300">Name</p>
            <input
              type="text"
              placeholder="Mahdi Baderloo"
              className="bg-amber-200 dark:bg-neutral-800 text-neutral-800 dark:text-amber-300 p-2 rounded-lg w-full outline-none border-none"
            />
          </div>
          <div className="p-2">
            <p className="mb-1 text-neutral-800 dark:text-amber-300">Phone</p>
            <input
              type="number"
              placeholder="0910*****98"
              className="bg-amber-200 dark:bg-neutral-800 text-neutral-800 dark:text-amber-300 p-2 rounded-lg w-full outline-none border-none"
            />
          </div>
        </form>
        <button
          className="w-full h-10 mt-2 bg-amber-50 dark:bg-amber-50/20 text-amber-300 rounded-xl"
          onClick={handleOpenSaveModal}
        >
          Save
        </button>
        <button
          className="w-full h-10 mt-2 bg-amber-50 dark:bg-amber-50/20 text-amber-950 rounded-xl"
          onClick={handleOpenLogoutModal}
        >
          Logout
        </button>
        <Modal isOpen={isOpen} title={title} onClose={close} />
      </main>
      <div className="w-full h-24"></div>
    </>
  );
}

export default Account;
