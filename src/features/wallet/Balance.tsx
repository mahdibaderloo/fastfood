import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { useTheme } from "../../store/themeStore";

function Balance() {
  const { theme } = useTheme();
  const width = window.innerWidth;

  return (
    <div className="bg-neutral-800 dark:bg-amber-300 w-[85%] mx-auto rounded-xl sm:w-70 sm:mx-auto">
      <div className="bg-amber-100 w-full mx-auto rounded-xl p-2 sm:p-3 flex flex-col items-center shadow">
        <p className="text-neutral-500 text-sm sm:text-[0.9rem]">
          Total Balance
        </p>
        <p className="text-neutral-800 mt-1 sm:mt-2 text-4xl">$94.00</p>
      </div>
      <ul className="flex items-center justify-evenly pt-2 pb-1 sm:p-3">
        <li className="flex flex-col items-center justify-center">
          <span className="bg-amber-300 dark:bg-neutral-800 p-2 sm:p-3 rounded-full">
            {theme === "dark" ? (
              <GiPayMoney size={width > 640 ? 36 : 30} color="#fef3c6" />
            ) : (
              <GiPayMoney size={width > 640 ? 36 : 30} color="#262626" />
            )}
          </span>
          <p className="text-[0.6rem] sm:text-[0.7rem] sm:mt-1 text-amber-300 dark:text-neutral-800">
            Deposit
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <span className="bg-amber-300 dark:bg-neutral-800 p-2 sm:p-3 rounded-full">
            {theme === "dark" ? (
              <GiReceiveMoney size={width > 640 ? 36 : 30} color="#fef3c6" />
            ) : (
              <GiReceiveMoney size={width > 640 ? 36 : 30} color="#262626" />
            )}
          </span>
          <p className="text-[0.6rem] sm:text-[0.7rem] sm:mt-1 text-amber-300 dark:text-neutral-800">
            Withdraw
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Balance;
