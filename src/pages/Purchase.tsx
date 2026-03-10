import { CgDanger } from "react-icons/cg";
import Header from "../components/Header";
import PurchaseAddressBox from "../features/cart/PurchaseAddressBox";
import PurchaseItem from "../features/cart/PurchaseItem";
import { useCartStore } from "../store/cartStore";
import BackButton from "../components/BackButton";

function Purchase() {
  const { items } = useCartStore();
  const width = window.innerWidth;

  return (
    <>
      <Header
        showBackButton={true}
        pContent="PURCHA$E"
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-19 min-h-screen overflow-y-scroll lg:overflow-hidden lg:w-[80%] lg:mx-auto sm:w-90 sm:mx-auto">
        <BackButton />
        <PurchaseAddressBox />
        <div className="bg-white/40 flex items-center gap-1 p-2 sm:p-3 rounded-xl mt-4 sm:mt-6">
          <CgDanger size={width > 640 ? 55 : 45} color="#262626" />
          <p className="text-neutral-800 text-[0.5rem] sm:text-[0.65rem] lg:text-[0.7rem] text-justify">
            The invoice will be delivered together with your order. You can also
            track and view your order anytime from your dashboard
          </p>
        </div>

        <div>
          <p className="mt-4 sm:mt-6 text-[0.7rem] sm:text-[0.8rem] text-neutral-800 dark:text-amber-100">
            Items:
          </p>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-2 mt-2">
            {items.map((item) => (
              <PurchaseItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div className="text-neutral-800 dark:text-amber-100 flex justify-between mt-4 sm:mt-6 sm:font-semibold px-6 lg:px-0 lg:w-[35%] lg:mx-auto">
          <p>Total price: </p>
          <p>$175</p>
        </div>
        <div className="lg:flex lg:justify-center">
          <button className="bg-neutral-800 dark:bg-amber-300 text-amber-300 dark:text-neutral-800 p-2 sm:p-3 rounded-lg sm:rounded-xl w-full lg:w-[40%] mt-6 shadow lg:cursor-pointer lg:hover:bg-neutral-950 lg:dark:hover:bg-amber-400 transition-all">
            Proceed to payment
          </button>
        </div>
        <div className="w-full h-2"></div>
      </main>
    </>
  );
}

export default Purchase;
