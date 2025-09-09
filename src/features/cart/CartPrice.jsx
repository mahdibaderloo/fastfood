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
        <button className="bg-amber-200 text-amber-800 p-2 rounded-lg w-full mt-4">
          Checkout
        </button>
      </div>
    </form>
  );
}

export default CartPrice;
