import Header from "../components/Header";
import PurchaseAddressBox from "../features/cart/PurchaseAddressBox";
import BackButton from "../components/BackButton";
import HintBox from "../features/cart/HintBox";
import PurchaseItems from "../features/cart/PurchaseItems";
import TotalPurchaseBox from "../features/cart/TotalPurchaseBox";

function Purchase() {
  return (
    <>
      <Header
        showBackButton={true}
        pContent="PURCHA$E"
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 xl:px-2 pt-19 min-h-screen overflow-y-scroll lg:overflow-hidden lg:w-[80%] xl:w-[1100px] 2xl:w-[1350px] lg:pt-16 2xl:pt-20 lg:mx-auto sm:w-90 sm:mx-auto">
        <BackButton />
        <PurchaseAddressBox />
        <HintBox />
        <PurchaseItems />
        <TotalPurchaseBox />
        <div className="w-full h-2"></div>
      </main>
    </>
  );
}

export default Purchase;
