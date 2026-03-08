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
      <main className="overflow-y-scroll lg:overflow-hidden pt-22 lg:pt-24 flex flex-col lg:flex-row justify-between h-screen">
        <ul className="flex flex-col gap-2 sm:w-90 sm:mx-auto lg:overflow-y-scroll lg:overflow-x-hidden lg:p-2 lg:bg-amber-100 lg:rounded-2xl">
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
