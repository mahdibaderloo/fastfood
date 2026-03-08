import { useParams } from "react-router-dom";

import Header from "../components/Header";
import OrderSummary from "../features/order/OrderSummary";
import BackButton from "../components/BackButton";

import pizza from "../assets/images/loading-1.png";
import OrderItemsQuantity from "../features/order/OrderItemsQuantity";

function Order() {
  const { orderId } = useParams();

  const order = {
    id: orderId ?? "4738929",
    date: "2025-10-10",
    time: "20:24",
    items: [
      { id: 1, name: "Pepperoni Pizza", qty: 1, price: 60, image: pizza },
      { id: 2, name: "Margherita Pizza", qty: 1, price: 60, image: pizza },
    ],
    deliveryFee: 0,
  };

  return (
    <>
      <Header showBackButton={true} classP="text-4xl dark:text-amber-300" />

      <main className="p-4 pt-16 h-screen overflow-y-scroll lg:overflow-hidden lg:w-[80%] lg:mx-auto">
        <BackButton />
        <section className="bg-neutral-800 dark:bg-amber-200 rounded-lg p-4 text-neutral-800 sm:w-90 sm:mx-auto">
          <p className="font-semibold text-amber-300 dark:text-neutral-800">
            Order: {order.id}
          </p>
          <p className="text-sm text-amber-200 dark:text-neutral-700 mt-1 sm:mt-3">
            Date: {order.date}
          </p>
          <p className="text-sm text-amber-200 dark:text-neutral-700 mt-1">
            Time: {order.time}
          </p>
        </section>
        <OrderItemsQuantity order={order} />
        <OrderSummary order={order} />
      </main>
    </>
  );
}

export default Order;
