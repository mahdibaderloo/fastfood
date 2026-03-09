function Transactions() {
  return (
    <div className="bg-amber-100 h-70 sm:h-74 lg:h-65 sm:w-90 lg:w-[65%] sm:mx-auto mt-6 lg:mt-0 p-2 pb-5 rounded-xl lg:rounded-none overflow-hidden">
      <p className="text-neutral-800 text-sm sm:text-[1rem] h-7 sm:h-10 lg:h-8">
        Transactions History
      </p>
      <div className="overflow-y-scroll h-[95%] scrollbar-hide">
        <ul className="flex flex-col gap-1 overflow-y-scroll pb-2 sm:pb-3.5 lg:pt-0 lg:pb-2 scrollbar-hide">
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Transactions;
