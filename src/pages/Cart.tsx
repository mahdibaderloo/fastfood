import Header from "../components/Header.js";
import CartItem from "../features/cart/CartItem.js";
import CartPrice from "../features/cart/CartPrice.js";

function Cart() {
  return (
    <>
      <Header pContent="My Cart" />
      <main className="overflow-y-scroll pt-22">
        <ul className="flex flex-col gap-2">
          <CartItem />
          <CartItem />
        </ul>
        <CartPrice />
      </main>
    </>
  );
}

export default Cart;
