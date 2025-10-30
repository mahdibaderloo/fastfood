import Header from "../components/Header";
import AddressItem from "../features/address/AddressItem";

function Address() {
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
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Address;
