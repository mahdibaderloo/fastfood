import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartStore } from "../../store/cartStore";
import toast from "react-hot-toast";
import { useFavoritesStore } from "../../store/favoritesStore";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

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
  const {
    items: favorites,
    addItem: addFavorite,
    removeItem: removeFavorite,
  } = useFavoritesStore();

  const isItemInCart = items.find((i) => i.id === id);
  const isItemInFavorites = favorites.find((i) => i.id === id);

  function handleAddItemToCart() {
    addItem({ ...item, count: 1 });
    toast.success("Product successfully added to cart");
  }

  function handleRemoveItemFromCart() {
    removeItem(id);
    toast.success("Product successfully removed from cart");
  }

  function handleAddItemToFavorites() {
    addFavorite(item);
    toast.success("Product successfully added to favorites");
  }

  function handleRemoveItemFromFavorites() {
    removeFavorite(id);
    toast.success("Product successfully removed from favorites");
  }

  return (
    <li className="bg-amber-50 rounded-lg w-[48%] flex flex-col p-2 relative">
      <Link to={`/${slugify(item.productName)}`}>
        <p className="self-end">
          {isItemInFavorites ? (
            <GoHeartFill
              size={30}
              color="#2c2c2c"
              onClick={handleRemoveItemFromFavorites}
            />
          ) : (
            <GoHeart
              size={30}
              color="#2c2c2c"
              onClick={handleAddItemToFavorites}
            />
          )}
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
      </Link>
    </li>
  );
}

export default MenuItem;
