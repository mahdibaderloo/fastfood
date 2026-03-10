import Header from "../components/Header.js";
import CartItem from "../features/cart/CartItem.js";
import CartPrice from "../features/cart/CartPrice.js";
import EmptyCart from "../features/cart/EmptyCart.js";
import { useCartStore } from "../store/cartStore.js";

function Cart() {
  const { items } = useCartStore();

  return (
    <>
      <Header pContent="Cart" />
      <main className="overflow-y-scroll lg:overflow-hidden pt-22 lg:pt-16 flex flex-col justify-between min-h-screen lg:bg-amber-300 lg:dark:bg-neutral-800">
        <ul className="flex flex-col lg:flex-row gap-2 sm:w-90 lg:w-full lg:flex-wrap sm:mx-auto lg:overflow-x-hidden lg:p-2 lg:px-20 lg:rounded-2xl">
          {items.length > 0 ? (
            items.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <EmptyCart />
          )}
        </ul>
        <CartPrice />
      </main>
    </>
  );
}

export default Cart;
