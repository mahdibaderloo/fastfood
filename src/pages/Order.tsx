import { useParams } from "react-router-dom";

import Header from "../components/Header";
import OrderSummary from "../features/order/OrderSummary";
import BackButton from "../components/BackButton";

import pizza from "../assets/images/loading-1.png";

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

        <section className="mt-4 bg-amber-100 rounded-lg sm:w-90 sm:mx-auto">
          <ul className="flex flex-col gap-2 p-2">
            {order.items.map((item) => (
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
                    <p className="text-amber-200 dark:text-amber-100">
                      {item.name}
                    </p>
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
            ))}
          </ul>
        </section>

        <OrderSummary order={order} />
      </main>
    </>
  );
}

export default Order;
