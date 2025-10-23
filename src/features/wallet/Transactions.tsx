function Transactions() {
  return (
    <div className="bg-amber-100 h-[57%] mt-4 p-2 pb-4 rounded-xl">
      <p className="text-neutral-800 text-sm h-7">Transactions History</p>
      <div className="overflow-y-scroll h-[95%] scrollbar-hide">
        <ul className="flex flex-col gap-1 overflow-y-scroll pb-2">
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Buy Pizza</p>
            <span className="text-sm text-red-500">- $128.00</span>
          </li>
          <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg">
            <p className="text-sm text-neutral-800">Deposit</p>
            <span className="text-sm text-green-500">+ $128.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Transactions;
