import Header from "../components/Header";
import OrderItem from "../features/order/OrderItem";

function Orders() {
  return (
    <>
      <Header
        classHeader="w-full flex items-center justify-center py-4 fixed z-50 bg-amber-300 dark:bg-neutral-800"
        pContent="ORDERS"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="overflow-y-scroll p-4 pt-20 h-screen">
        <ul className="flex flex-col gap-1">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Orders;
