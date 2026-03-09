interface Item {
  item: { id: number; image: string; name: string; price: number; qty: number };
}

function OrderQuantityItem({ item }: Item) {
  console.log(item);
  return (
    <li
      key={item.id}
      className="bg-neutral-800 rounded-lg p-3 lg:p-1.5 flex items-center justify-between"
    >
      <div className="flex items-center lg:w-full lg:px-2 lg:justify-between gap-3">
        <div className="lg:flex lg:items-center lg:gap-1.5">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-md lg:w-10 lg:h-10"
          />
          <p className="text-amber-200 dark:text-amber-100 hidden lg:block">
            {item.name}
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:gap-3">
          <p className="text-amber-200 dark:text-amber-100 lg:hidden">
            {item.name}
          </p>
          <div className="flex items-center justify-between lg:gap-4 sm:mt-2 lg:mt-0  ">
            <p className="text-sm text-amber-100 dark:text-amber-200">
              Qty: {item.qty}
            </p>
            <p className="text-amber-100 dark:text-amber-200 font-medium">
              ${item.price * item.qty}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default OrderQuantityItem;
