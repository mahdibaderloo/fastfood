import { useCartStore } from "../../store/cartStore";

import PurchaseItem from "./PurchaseItem";

function PurchaseItems() {
  const { items } = useCartStore();

  return (
    <div className="xl:w-[90%] xl:mx-auto">
      <p className="mt-4 sm:mt-6 text-[0.7rem] sm:text-[0.8rem] 2xl:text-[1rem] text-neutral-800 dark:text-amber-100">
        Items:
      </p>
      <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-2 2xl:gap-4 mt-2 2xl:mt-3">
        {items.map((item) => (
          <PurchaseItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PurchaseItems;
