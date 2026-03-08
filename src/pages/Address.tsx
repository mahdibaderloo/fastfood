import BackButton from "../components/BackButton";
import Header from "../components/Header";
import Modal from "../components/Modal";
import AddNewAddressButton from "../features/address/AddNewAddressButton";
import AddressItem from "../features/address/AddressItem";

function Address() {
  return (
    <>
      <Header
        pContent="ADDRESS"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <BackButton />
        <ul className="flex flex-col items-center justify-center flex-wrap gap-2 sm:gap-3 sm:w-80 sm:mx-auto">
          <AddressItem />
          <AddressItem />
        </ul>
        <AddNewAddressButton />
        <Modal />
        <div className="w-full h-2"></div>
      </main>
    </>
  );
}

export default Address;
