import { useState } from "react";
import { useCartStore } from "../../store/cartStore";

export default function TotalPurchaseBox() {
  const [delivery, setDelivery] = useState(10);
  const { totalPrice } = useCartStore();

  return (
    <>
      <div className="text-neutral-800 dark:text-amber-100 flex justify-between mt-4 2xl:text-xl sm:mt-6 sm:font-semibold px-6 lg:px-0 lg:w-[35%] 2xl:w-[50%] lg:mx-auto">
        <p>Delivery: </p>
        <p>${delivery}</p>
      </div>
      <div className="text-neutral-800 dark:text-amber-100 flex justify-between mt-4 2xl:text-xl sm:mt-6 sm:font-semibold px-6 lg:px-0 lg:w-[35%] 2xl:w-[50%] lg:mx-auto">
        <p>Total price: </p>
        <p>${delivery ? totalPrice + delivery : totalPrice}</p>
      </div>
      <div className="lg:flex lg:justify-center">
        <button className="bg-neutral-800 dark:bg-amber-300 text-amber-300 dark:text-neutral-800 2xl:text-xl p-2 sm:p-3 rounded-lg sm:rounded-xl w-full lg:w-[40%] 2xl:w-[50%] 2xl:h-14 mt-6 shadow lg:cursor-pointer lg:hover:bg-neutral-950 lg:dark:hover:bg-amber-400 transition-all">
          Proceed to payment
        </button>
      </div>
    </>
  );
}
