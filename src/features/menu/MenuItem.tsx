import { GoHeart } from "react-icons/go";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartStore } from "../../store/cartStore";

interface Item {
  item: {
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;
    image: string;
    comments: string[];
    score: number;
  };
}

function MenuItem({ item }: Item) {
  const { productName, price, image, id } = item;
  const { addItem, removeItem, items } = useCartStore();
  const isItemInCart = items.find((i) => i.id === id);

  function handleAddItemToCart() {
    addItem({ ...item, count: 1 });
  }

  function handleRemoveItemFromCart() {
    removeItem(id);
  }

  return (
    <li className="bg-amber-50 rounded-lg w-[48%] flex flex-col p-2 relative">
      <p className="self-end">
        <GoHeart size={30} color="#2c2c2c" />
        {/* <GoHeartFill color="#2c2c2c" /> */}
      </p>
      <img
        src={image}
        alt="product-image"
        className="w-full h-24 mt-2 object-cover rounded-lg"
        loading="lazy"
      />
      <p className="text-[0.6rem] text-neutral-900 mt-2">{productName}</p>
      <p className="mt-2 text-neutral-800">${price}</p>
      {isItemInCart ? (
        <button
          title="Remove from cart"
          className="self-end bg-amber-200 absolute right-0 bottom-0 p-2 rounded-tl-lg rounded-br-lg"
          onClick={handleRemoveItemFromCart}
        >
          <IoMdRemove />
        </button>
      ) : (
        <button
          title="Add to cart"
          className="self-end bg-amber-200 absolute right-0 bottom-0 p-2 rounded-tl-lg rounded-br-lg"
          onClick={handleAddItemToCart}
        >
          <IoMdAdd />
        </button>
      )}
    </li>
  );
}

export default MenuItem;
