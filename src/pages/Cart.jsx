import CartItem from "../features/cart/CartItem";
import HeaderCart from "../features/cart/HeaderCart";

function Cart() {
  return (
    <>
      <HeaderCart />
      <main className="overflow-y-scroll py-4">
        <ul className="flex flex-col gap-2">
          <CartItem />
          <CartItem />
        </ul>
      </main>
    </>
  );
}

export default Cart;
