import React from "react";
import { useModalStore } from "../../store/modalStore";

function AccountMobileButton() {
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
    <div className="sm:w-80 sm:mx-auto sm:mt-6 lg:hidden">
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
  );
}

export default AccountMobileButton;
