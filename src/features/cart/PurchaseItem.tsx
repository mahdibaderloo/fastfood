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
    <li className="w-full h-20 bg-amber-100 p-2 rounded-2xl flex justify-between shadow">
      <div className="flex flex-col justify-around">
        <div className="flex items-center gap-2 text-neutral-800">
          <FaPizzaSlice />
          <span className="text-[0.65rem]">{item.productName}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-800">
            <FaMoneyBill1Wave />
            <span className="text-[0.85rem]">{item.price}</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-800">
            <GoNumber />
            <span className="text-[0.85rem]">{item.count}</span>
          </div>
        </div>
      </div>
      <div className="h-full w-16 bg-amber-50 rounded-2xl p-1 shadow flex justify-center items-center">
        <img src={item.image} alt="item-image" className="" />
      </div>
    </li>
  );
}
