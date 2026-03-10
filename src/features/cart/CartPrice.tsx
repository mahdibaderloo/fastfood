import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

function CartPrice() {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(10);
  const { totalPrice, items } = useCartStore();
  const isEmpty = items.length === 0;

  function handlePurchase(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/purchase");
  }

  return (
    <form className="p-4 bg-amber-50 dark:bg-amber-300 mt-2 lg:mt-0 rounded-t-xl lg:rounded-t-3xl pb-18 sm:pb-4 lg:p-2 lg:h-fit lg:flex lg:flex-col lg:justify-between">
      <div className="bg-amber-200 dark:bg-neutral-800 p-1 rounded-lg sm:rounded-2xl flex sm:w-70 lg:w-66 sm:h-12 lg:h-11 sm:mx-auto">
        <input
          type="text"
          maxLength={10}
          placeholder="Enter your code..."
          className="pl-2 border-none outline-none text-amber-800 dark:text-amber-300 w-[80%] sm:font-semibold sm:tracking-wide"
        />
        <button className="bg-amber-50 hover:bg-white transition-all text-amber-800 p-1 sm:py-2 lg:py-1 sm:px-3 rounded-lg sm:rounded-xl shadow lg:cursor-pointer">
          Apply
        </button>
      </div>
      <div className="sm:w-70 sm:mx-auto">
        <div className="flex justify-between items-center mt-2 sm:mx-2 lg:text-[0.85rem]">
          <span className="text-neutral-700">Sub total</span>
          <p className="text-neutral-800">${totalPrice}</p>
        </div>
        <div className="flex justify-between items-center mt-2 sm:mx-2 lg:text-[0.85rem]">
          <span className="text-neutral-700">Delivery</span>
          <p className="text-neutral-800">${isEmpty ? 0 : delivery}</p>
        </div>
        <div className="flex justify-between items-center mt-2 sm:mx-2 lg:text-[0.85rem]">
          <span className="text-neutral-700">Discount</span>
          <p className="text-neutral-800">$0</p>
        </div>
        <div className="flex justify-between items-center mt-4 sm:mt-6 lg:mt-4 sm:mx-2 lg:text-[1rem] lg:font-semibold">
          <span className="text-neutral-700">Total</span>
          <p className="text-neutral-800">
            ${isEmpty ? 0 : totalPrice + delivery}
          </p>
        </div>

        <div className="lg:flex lg:justify-center">
          <button
            className={`p-2 rounded-lg sm:rounded-2xl w-full lg:w-[94%] sm:h-12 lg:h-11 mt-6 lg:mt-4 sm:text-xl lg:text-lg inline-block relative overflow-hidden ${isEmpty ? "hidden invisible" : "animate-bounce lg:animate-none transition-all bg-amber-200 lg:hover:bg-amber-300 dark:bg-neutral-800 lg:dark:hover:bg-neutral-950 dark:text-amber-300 text-amber-800 lg:cursor-pointer"}`}
            onClick={handlePurchase}
            disabled={isEmpty}
          >
            Purchase
            {/* <span
            className={`absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 dark:bg-amber-300 ${isEmpty ? "hidden" : "animate-spin-border"}`}
          ></span>
          <span
            className={`absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 dark:bg-amber-300 ${isEmpty ? "hidden" : "animate-spin-border animation-delay-25"}`}
          ></span>
          <span
            className={`absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 dark:bg-amber-300 ${isEmpty ? "hidden" : "animate-spin-border delay-150 animation-delay-50"}`}
          ></span>
          <span
            className={`absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 dark:bg-amber-300 ${isEmpty ? "hidden" : "animate-spin-border delay-300 animation-delay-75"}`}
          ></span> */}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CartPrice;
