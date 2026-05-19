import React from "react";
import { useModalStore } from "../../store/modalStore";
import Button from "../../components/Button";

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
      <Button
        text="Save"
        bg="bg-amber-50"
        darkBg="bg-amber-50/20"
        textColor="text-amber-300"
        textDarkColor="text-amber-300"
        onclick={handleOpenSaveModal}
      ></Button>
      <Button
        text="Logout"
        bg="bg-amber-50"
        darkBg="bg-amber-50/20"
        textColor="text-amber-950"
        textDarkColor="text-amber-950"
        onclick={handleOpenLogoutModal}
      ></Button>
    </div>
  );
}

export default AccountMobileButton;
