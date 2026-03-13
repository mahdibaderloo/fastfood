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
      <main className="p-4 xl:px-2 pt-22 h-screen overflow-y-scroll lg:scrollbar-hide lg:w-[80%] xl:w-[1100px] 2xl:w-[1350px] lg:mx-auto lg:pt-16 2xl:pt-20">
        <BackButton />
        <ul className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-2 sm:gap-3 lg:gap-2 sm:w-80 lg:w-full lg:mt-4 sm:mx-auto">
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
