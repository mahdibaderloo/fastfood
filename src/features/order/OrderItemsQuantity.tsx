import OrderQuantityItem from "./OrderQuantityItem";

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

function OrderItemsQuantity({ order }: Order) {
  return (
    <section className="mt-4 bg-amber-100 rounded-lg sm:w-90 2xl:w-120 sm:mx-auto">
      <ul className="flex flex-col gap-1 p-1">
        {order.items.map((item) => (
          <OrderQuantityItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default OrderItemsQuantity;
