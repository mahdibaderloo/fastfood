import Header from "../components/Header";
import Modal from "../components/Modal";
import AddressForm from "../features/address/AddressForm";
import AddressItem from "../features/address/AddressItem";
import { useModalStore } from "../store/modalStore";

function Address() {
  const { open } = useModalStore();

  function handleAddAddress() {
    open({ title: "Add New Address", content: <AddressForm /> });
  }

  return (
    <>
      <Header
        pContent="ADDRESS"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <ul className="flex flex-col items-center justify-center flex-wrap gap-2">
          <AddressItem />
          <AddressItem />
        </ul>
        <button
          className="bg-amber-200 text-neutral-800 w-full rounded-lg p-2 mt-10"
          onClick={handleAddAddress}
        >
          Add New Address
        </button>
        <Modal />
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Address;
