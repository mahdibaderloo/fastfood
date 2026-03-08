import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import BackButton from "../components/BackButton";
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
      <main className="overflow-y-scroll lg:overflow-hidden lg:w-[80%] lg:mx-auto p-4 pt-20 lg:pt-16 h-screen">
        <BackButton />
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:flex-wrap gap-1 sm:gap-2 sm:w-90 lg:w-full lg:mt-4 sm:mx-auto lg:overflow-y-auto">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ul>
        <div className="w-full h-2 lg:hidden"></div>
        <div className="hidden lg:flex w-full mt-6 justify-center items-center gap-2 text-neutral-800 dark:text-amber-200">
          <CgChevronLeft
            size={22}
            className="text-neutral-700 dark:text-amber-200"
          />
          <span className="cursor-pointer">1</span>
          <span className="cursor-pointer">2</span>
          <span className="cursor-pointer">3</span>
          <CgChevronRight
            size={22}
            className="text-neutral-700 dark:text-amber-200"
          />
        </div>
      </main>
    </>
  );
}

export default Orders;
