import Header from "../components/Header";
import PurchaseAddressBox from "../features/cart/PurchaseAddressBox";

function Purchase() {
  return (
    <>
      <Header
        showBackButton={true}
        pContent="PURCHA$E"
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-19 h-screen overflow-y-scroll">
        <PurchaseAddressBox />
      </main>
    </>
  );
}

export default Purchase;
