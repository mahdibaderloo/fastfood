import { FaMoneyBillWave } from "react-icons/fa6";
import { Food } from "../../types/types";

interface ItemContentProps {
  item: Food | null;
}

export default function ItemContent({ item }: ItemContentProps) {
  if (!item) {
    return <p>Food not found</p>;
  }

  return (
    <>
      <h3 className="text-xl text-neutral-900 dark:text-amber-300">
        {item?.productName}
      </h3>
      <div className="flex items-center gap-2">
        <FaMoneyBillWave className="text-sm text-neutral-700 dark:text-amber-100" />
        <p className="text-neutral-700 dark:text-amber-100 text-lg">
          ${item?.price}
        </p>
      </div>
      <p className="text-justify text-neutral-700 dark:text-amber-200 text-sm">
        {item?.description}
      </p>
    </>
  );
}
