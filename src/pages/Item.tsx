import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFoods } from "../hooks/useFoods";
import { useItemStore } from "../store/itemStore";
import { useFavoritesStore } from "../store/favoritesStore";
import { deSlugify } from "../utils/slugify";

import Loading from "../components/Loading";
import Header from "../components/Header";
import { GoHeart, GoHeartFill } from "react-icons/go";
import BackButton from "../components/BackButton";

function Item() {
  const { data: items, isLoading } = useFoods();
  const { item, setItem } = useItemStore();
  const { items: favorites } = useFavoritesStore();

  const params = useParams();
  const slug = params.itemName!;
  const itemName = deSlugify(slug);

  useEffect(
    function () {
      if (!items) return;

      const findItem = items.find(
        (i) => i.productName.toLowerCase() === itemName.toLowerCase(),
      );

      if (!findItem) return;

      const isItemInFavorites = favorites.some((i) => i.id === findItem.id);

      setItem({ ...findItem, isFavorite: isItemInFavorites });
    },
    [items, itemName, favorites, setItem],
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <Header showBackButton={true}>
        <div className="mr-3">
          {item?.isFavorite ? (
            <GoHeartFill
              size={30}
              color="#ffd230"
              // onClick={handleRemoveItemFromFavorites}
            />
          ) : (
            <GoHeart
              size={30}
              color="#ffd230"
              // onClick={handleAddItemToFavorites}
            />
          )}
        </div>
      </Header>
      <main className="min-h-screen overflow-y-scroll pt-15 flex flex-col items-center">
        <BackButton />
        <div className="bg-amber-300 dark:bg-neutral-400 w-[100%] h-50 p-2 rounded-full overflow-hidden">
          <img src={item?.image} alt="item-image" />
        </div>
        <div className="bg-amber-300 h-full mt-2">
          <h3>{item?.productName}</h3>
          <p>{item?.price}</p>
          <p>{item?.description}</p>
          <button>Add To Cart</button>
        </div>
        <ul>
          {item?.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Item;
