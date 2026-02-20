import Header from "../components/Header.js";
import CartItem from "../features/cart/CartItem.js";
import CartPrice from "../features/cart/CartPrice.js";
import { useCartStore } from "../store/cartStore.js";

function Cart() {
  const { items } = useCartStore();

  return (
    <>
      <Header pContent="Cart" />
      <main className="overflow-y-scroll pt-22">
        <ul className="flex flex-col gap-2">
          {items.length > 0 &&
            items.map((item) => <CartItem key={item.id} item={item} />)}
        </ul>
        <CartPrice />
      </main>
    </>
  );
}

export default Cart;
