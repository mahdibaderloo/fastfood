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
    <form className="p-4 bg-amber-50 dark:bg-amber-300 mt-2 rounded-t-xl pb-18">
      <div className="bg-amber-200 dark:bg-neutral-800 p-1 rounded-lg flex">
        <input
          type="text"
          maxLength={10}
          placeholder="Enter your code..."
          className="pl-2 border-none outline-none text-amber-800 dark:text-amber-300 w-[80%]"
        />
        <button className="bg-amber-50 text-amber-800 p-1 rounded-lg shadow">
          Apply
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-neutral-700">Sub total</span>
          <p className="text-neutral-800">${totalPrice}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-neutral-700">Delivery</span>
          <p className="text-neutral-800">${isEmpty ? 0 : delivery}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-neutral-700">Discount</span>
          <p className="text-neutral-800">$0</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-neutral-700">Total</span>
          <p className="text-neutral-800">
            ${isEmpty ? 0 : totalPrice + delivery}
          </p>
        </div>
        <button
          className={`p-2 rounded-lg w-full mt-6 inline-block relative overflow-hidden ${isEmpty ? "hidden invisible" : "animate-bounce bg-amber-200 dark:bg-neutral-800 dark:text-amber-300 text-amber-800"}`}
          onClick={handlePurchase}
          disabled={isEmpty}
        >
          Purchase
          <span
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
          ></span>
        </button>
      </div>
    </form>
  );
}

export default CartPrice;
