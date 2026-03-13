import { FaMoneyBill1Wave, FaPizzaSlice } from "react-icons/fa6";
import { GoNumber } from "react-icons/go";

interface Item {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
  count: number;
}

type ItemProp = { item: Item };

export default function PurchaseItem({ item }: ItemProp) {
  return (
    <li className="w-full lg:w-[45%] xl:w-[48%] h-20 sm:h-24 2xl:h-28 bg-amber-100 p-2 sm:p-3 rounded-2xl flex justify-between shadow">
      <div className="flex flex-col 2xl:gap-4 justify-around">
        <div className="flex items-center gap-2 text-neutral-800">
          <FaPizzaSlice className="2xl:w-5 2xl:h-5" />
          <span className="text-[0.65rem] sm:text-[0.75rem] lg:text-[0.8rem] 2xl:text-[1rem]">
            {item.productName}
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 sm:mt-2">
          <div className="flex items-center gap-2 text-neutral-800">
            <FaMoneyBill1Wave className="2xl:w-5 2xl:h-5" />
            <span className="text-[0.85rem] sm:text-[0.9rem] lg:text-[1rem] lg:font-semibold">
              {item.price}
            </span>
          </div>
          <div className="flex items-center gap-1 text-neutral-800">
            <GoNumber className="2xl:w-5 2xl:h-5" />
            <span className="text-[0.85rem] sm:text-[0.9rem] lg:text-[1rem] lg:font-semibold">
              {item.count}
            </span>
          </div>
        </div>
      </div>
      <div className="h-full w-16 sm:w-18 2xl:w-22 bg-amber-50 rounded-2xl p-1 shadow flex justify-center items-center">
        <img src={item.image} alt="item-image" className="" />
      </div>
    </li>
  );
}
