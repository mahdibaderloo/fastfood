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

function OrderSummary({ order }: Order) {
  const subtotal = order.items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const total = subtotal + order.deliveryFee;

  return (
    <section className="dark:bg-neutral-800 rounded-lg p-4 mt-4 text-neutral-800 dark:text-amber-100 sm:w-90 2xl:w-120 sm:mx-auto">
      <div className="flex justify-between py-1 2xl:py-2 2xl:text-lg">
        <span className="text-neutral-700 dark:text-amber-100">Subtotal</span>
        <span className="text-neutral-700 dark:text-amber-100">
          ${subtotal}
        </span>
      </div>
      <div className="flex justify-between py-1 2xl:py-2 2xl:text-lg">
        <span className="text-neutral-700 dark:text-amber-100">Delivery</span>
        <span className="text-neutral-700 dark:text-amber-100">
          {order.deliveryFee === 0 ? "Free" : `$${order.deliveryFee}`}
        </span>
      </div>
      <div className="h-px bg-neutral-600 dark:bg-neutral-700 my-2" />
      <div className="flex justify-between py-1 2xl:py-2 text-lg sm:text-xl 2xl:text-2xl font-semibold">
        <span className="text-neutral-800 dark:text-amber-200">Total</span>
        <span className="text-neutral-800 dark:text-amber-200">${total}</span>
      </div>
    </section>
  );
}

export default OrderSummary;
