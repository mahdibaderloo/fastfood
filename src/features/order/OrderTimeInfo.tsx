interface Item {
  id: number;
  image: string;
  name: string;
  price: number;
  qty: number;
}

interface Order {
  order: {
    id: string;
    date: string;
    time: string;
    deliveryFee: number;
    items: Item[];
  };
}

function OrderTimeInfo({ order }: Order) {
  return (
    <section className="bg-neutral-800 dark:bg-amber-200 rounded-lg p-4 text-neutral-800 sm:w-90 2xl:w-120 sm:mx-auto 2xl:p-6">
      <p className="font-semibold text-amber-300 dark:text-neutral-800 2xl:text-lg">
        Order: {order.id}
      </p>
      <p className="text-sm text-amber-200 dark:text-neutral-700 mt-1 sm:mt-3">
        Date: {order.date}
      </p>
      <p className="text-sm text-amber-200 dark:text-neutral-700 mt-1">
        Time: {order.time}
      </p>
    </section>
  );
}

export default OrderTimeInfo;
