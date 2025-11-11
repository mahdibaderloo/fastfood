import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { CgChevronLeft } from "react-icons/cg";
import pizza from "../data/images/loading-1.png";

function Order() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  // Mock data for the order detail page
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

  const subtotal = order.items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const total = subtotal + order.deliveryFee;

  return (
    <>
      <Header pContent="ORDER" />
      {/* <button
          aria-label="Back"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-amber-200/60 dark:hover:bg-neutral-700"
          onClick={() => navigate(-1)}
        >
          <CgChevronLeft
            size={28}
            className="text-neutral-800 dark:text-amber-300"
          />
        </button> */}

      <main className="p-4 pt-22 h-screen overflow-y-scroll">
        <section className="bg-neutral-800 dark:bg-amber-200 rounded-lg p-4 text-neutral-800">
          <p className="font-semibold text-amber-300">Order: {order.id}</p>
          <p className="text-sm text-amber-200 dark:text-neutral-600 mt-1">
            Date: {order.date}
          </p>
          <p className="text-sm text-amber-200 dark:text-neutral-600 mt-1">
            Time: {order.time}
          </p>
        </section>

        <section className="mt-4 bg-amber-100 rounded-lg">
          <ul className="flex flex-col gap-2 p-2">
            {order.items.map((it) => (
              <li
                key={it.id}
                className="bg-neutral-800 rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="text-amber-200 dark:text-amber-100">
                      {it.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-amber-100 dark:text-amber-200">
                        Qty: {it.qty}
                      </p>
                      <p className="text-amber-100 dark:text-amber-200 font-medium">
                        ${it.price * it.qty}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Summary */}
        <section className="dark:bg-neutral-800 rounded-lg p-4 mt-4 text-neutral-800 dark:text-amber-100">
          <div className="flex justify-between py-1">
            <span className="text-neutral-700 dark:text-amber-100">
              Subtotal
            </span>
            <span className="text-neutral-700 dark:text-amber-100">
              ${subtotal}
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-neutral-700 dark:text-amber-100">
              Delivery
            </span>
            <span className="text-neutral-700 dark:text-amber-100">
              {order.deliveryFee === 0 ? "Free" : `$${order.deliveryFee}`}
            </span>
          </div>
          <div className="h-px bg-neutral-600 dark:bg-neutral-700 my-2" />
          <div className="flex justify-between py-1 text-lg font-semibold">
            <span className="text-neutral-800 dark:text-amber-200">Total</span>
            <span className="text-neutral-800 dark:text-amber-200">
              ${total}
            </span>
          </div>
        </section>

        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Order;
