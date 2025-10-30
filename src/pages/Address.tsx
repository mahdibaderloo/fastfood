import Header from "../components/Header";
import AddressItem from "../features/address/AddressItem";

function Address() {
  return (
    <>
      <Header pContent="Address" />
      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <ul className="flex items-center justify-center flex-wrap gap-2">
          <AddressItem />
          <AddressItem />
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Address;
