import React from "react";
import { useModalStore } from "../../store/modalStore";
import AddressForm from "./AddressForm";

function AddNewAddressButton() {
  const { open } = useModalStore();

  function handleAddAddress(e: React.MouseEvent) {
    e.preventDefault();
    open({ title: "Add New Address", content: <AddressForm /> });
  }
  return (
    <div className="sm:w-80 sm:mx-auto">
      <button
        className="bg-amber-200 text-neutral-800 w-full rounded-lg sm:rounded-xl p-2 mt-10"
        onClick={handleAddAddress}
      >
        Add New Address
      </button>
    </div>
  );
}

export default AddNewAddressButton;
