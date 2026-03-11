import { useParams } from "react-router-dom";

import Header from "../components/Header";
import OrderSummary from "../features/order/OrderSummary";
import BackButton from "../components/BackButton";

import pizza from "../assets/images/loading-1.png";
import OrderItemsQuantity from "../features/order/OrderItemsQuantity";
import OrderTimeInfo from "../features/order/OrderTimeInfo";

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

      <main className="p-4 xl:px-2 pt-16 h-screen lg:min-h-screen overflow-y-scroll lg:overflow-hidden lg:w-[80%] xl:w-[1100px] lg:mx-auto">
        <BackButton />
        <OrderTimeInfo order={order} />
        <OrderItemsQuantity order={order} />
        <OrderSummary order={order} />
      </main>
    </>
  );
}

export default Order;
