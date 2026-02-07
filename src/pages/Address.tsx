import Header from "../components/Header";
import Modal from "../components/Modal";
import AddressItem from "../features/address/AddressItem";
import { useModalStore } from "../store/modalStore";

function Address() {
  const { isOpen, title, onClose } = useModalStore();
  return (
    <>
      <Header pContent="ADDRESS" />
      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <ul className="flex flex-col items-center justify-center flex-wrap gap-2">
          <AddressItem />
          <AddressItem />
        </ul>
        <button className="bg-amber-200 text-neutral-800 w-full rounded-lg p-2 mt-10">
          Add New Address
        </button>
        <Modal isOpen={isOpen} title={title} onClose={onClose} />
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Address;
