function CartPrice() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Enter your code..." className="" />
        <button>Apply</button>
      </div>
      <div>
        <div>
          <span>Sub total</span>
          <p>$120</p>
        </div>
        <div>
          <span>Delivery</span>
          <p>$10</p>
        </div>
        <div>
          <span>Total</span>
          <p>$130</p>
        </div>
        <button>Checkout</button>
      </div>
    </form>
  );
}

export default CartPrice;
