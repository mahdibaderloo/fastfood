import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import Button from "../../components/Button";

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
      <Button
        text="Proceed to payment"
        bg="bg-neutral-800"
        darkBg="bg-amber-300"
        textColor="text-amber-300"
        textDarkColor="text-neutral-800"
      ></Button>
    </>
  );
}
