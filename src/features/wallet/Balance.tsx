import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";

function Balance() {
  return (
    <div className="bg-amber-300 w-[85%] mx-auto rounded-xl">
      <div className="bg-amber-100 w-full mx-auto rounded-xl p-2 flex flex-col items-center shadow">
        <p className="text-neutral-500 text-sm">Total Balance</p>
        <p className="text-neutral-800 mt-1 text-4xl">$94.00</p>
      </div>
      <ul className="flex items-center justify-evenly pt-2 pb-1">
        <li className="flex flex-col items-center justify-center">
          <span className="bg-neutral-800 p-2 rounded-full">
            <GiPayMoney size={30} color="#fef3c6" />
          </span>
          <p className="text-[16px] text-neutral-800">Deposit</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <span className="bg-neutral-800 p-2 rounded-full">
            <GiReceiveMoney size={30} color="#fef3c6" />
          </span>
          <p className="text-[16px] text-neutral-800">Withdraw</p>
        </li>
      </ul>
    </div>
  );
}

export default Balance;
