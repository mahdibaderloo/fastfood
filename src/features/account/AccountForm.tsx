import React from "react";
import { useModalStore } from "../../store/modalStore";

function AccountForm() {
  const { open } = useModalStore();

  function handleOpenLogoutModal(e: React.MouseEvent) {
    e.preventDefault();
    open({ title: "Are you sure you want to logout?" });
  }

  function handleOpenSaveModal(e: React.MouseEvent) {
    e.preventDefault();
    open({ title: "Are you sure you want to save the changes?" });
  }
  return (
    <form className="mt-8 p-2 bg-amber-50 dark:bg-amber-50/20 backdrop-blur-md rounded-2xl sm:w-80 sm:h-50 lg:h-fit sm:mx-auto lg:shadow">
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
          type="text"
          placeholder="0910*****98"
          className="bg-amber-200 dark:bg-neutral-800 text-neutral-800 dark:text-amber-300 p-2 sm:p-2.5 rounded-lg w-full outline-none border-none"
        />
      </div>
      <div className="hidden lg:flex gap-2 p-2">
        <button
          className="w-1/2 h-10 mt-2 bg-amber-300 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl cursor-pointer hover:bg-neutral-700 dark:"
          onClick={handleOpenSaveModal}
        >
          Save
        </button>
        <button
          className="w-1/2 h-10 mt-2 bg-red-500 text-white rounded-xl cursor-pointer hover:bg-neutral-700 dark:"
          onClick={handleOpenLogoutModal}
        >
          Logout
        </button>
      </div>
    </form>
  );
}

export default AccountForm;
