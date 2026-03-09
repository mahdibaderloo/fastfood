import { GoHeartFill } from "react-icons/go";
import pizza from "../../assets/images/loading-1.png";
import toast from "react-hot-toast";
import { useFavoritesStore } from "../../store/favoritesStore";

interface Item {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
}

interface FavoriteProps {
  item: Item;
}

function FavoritesItem({ item }: FavoriteProps) {
  const { removeItem } = useFavoritesStore();
  const width = window.innerWidth;

  function handleRemoveItemFromFavorites() {
    removeItem(item.id);
    toast.success("Product successfully removed from favorites");
  }

  return (
    <li className="bg-amber-50 rounded-lg w-[48%] sm:w-[48.5%] lg:w-[10rem] lg:h-fit h-[300px] flex flex-col justify-between p-2 relative">
      <p className="self-end">
        <GoHeartFill
          size={width > 640 ? 36 : 30}
          color="#2c2c2c"
          onClick={handleRemoveItemFromFavorites}
        />
      </p>
      <img
        src={item.image}
        alt="product-image"
        className="w-full h-24 lg:h-[9rem] mt-2 object-cover rounded-lg"
      />
      <p className="text-[0.7rem] sm:text-[0.8rem] text-neutral-900 mt-2">
        {item.productName}
      </p>
    </li>
  );
}

export default FavoritesItem;
