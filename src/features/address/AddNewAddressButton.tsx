import React from "react";
import { useModalStore } from "../../store/modalStore";
import AddressForm from "./AddressForm";
import Button from "../../components/Button";

function AddNewAddressButton() {
  const { open } = useModalStore();

  function handleAddAddress(e: React.MouseEvent) {
    e.preventDefault();
    open({ title: "Add New Address", content: <AddressForm /> });
  }
  return (
    <div className="sm:w-80 sm:mx-auto">
      <Button
        text="Add New Address"
        bg="bg-amber-200"
        darkBg="bg-amber-200"
        textColor="text-neutral-800"
        textDarkColor="text-neutral-800"
        onclick={handleAddAddress}
      ></Button>
    </div>
  );
}

export default AddNewAddressButton;
