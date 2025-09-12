function CartPrice() {
  return (
    <form className="p-4 bg-amber-50 mt-2 rounded-t-xl pb-18">
      <div className="bg-amber-200 p-1 rounded-lg">
        <input
          type="text"
          placeholder="Enter your code..."
          className="pl-2 border-none outline-none text-amber-800"
        />
        <button className="bg-amber-50 text-amber-800 p-1 rounded-lg shadow">
          Apply
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-neutral-700">Sub total</span>
          <p className="text-neutral-800">$120</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-neutral-700">Delivery</span>
          <p className="text-neutral-800">$10</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-neutral-700">Total</span>
          <p className="text-neutral-800">$130</p>
        </div>
        <button className="bg-amber-200 text-amber-800 p-2 rounded-lg w-full mt-6 inline-block relative overflow-hidden animate-bounce">
          Checkout
          <span className="absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 animate-spin-border"></span>
          <span className="absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 animate-spin-border animation-delay-25"></span>
          <span className="absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 animate-spin-border delay-150 animation-delay-50"></span>
          <span className="absolute top-0 left-0 rounded-2xl w-[6px] h-[6px] bg-amber-800 animate-spin-border delay-300 animation-delay-75"></span>
        </button>
      </div>
    </form>
  );
}

export default CartPrice;
