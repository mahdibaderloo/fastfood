import pizza from "../../data/images/loading-1.png";

function CartItem() {
  return (
    <li className="flex bg-amber-50 rounded-xl p-2 shadow w-[95%] mx-auto">
      <div className="bg-amber-200 w-18 rounded-xl shadow">
        <img src={pizza} alt="product-image" className="w-full" />
      </div>
      <div className=" flex flex-col justify-between ml-3">
        <p className="text-neutral-900 text-xl">Title</p>
        <p className="text-neutral-800">$20</p>
      </div>
      <div className="w-18 h-fit p-0.5 rounded-lg flex justify-between bg-amber-200 dark:bg-neutral-800 text-amber-800 mt-auto ml-auto">
        <span className="bg-amber-50 w-5 flex justify-center rounded-md">
          -
        </span>
        <span className="text-amber-800">1</span>
        <span className="bg-amber-300 text-amber-800 w-5 flex justify-center rounded-md">
          +
        </span>
      </div>
    </li>
  );
}

export default CartItem;
