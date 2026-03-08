interface Item {
  item: { id: number; image: string; name: string; price: number; qty: number };
}

function OrderQuantityItem({ item }: Item) {
  console.log(item);
  return (
    <li
      key={item.id}
      className="bg-neutral-800 rounded-lg p-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-md"
        />
        <div>
          <p className="text-amber-200 dark:text-amber-100">{item.name}</p>
          <div className="flex items-center justify-between sm:mt-2">
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
