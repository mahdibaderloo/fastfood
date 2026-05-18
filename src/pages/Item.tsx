import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFoods } from "../hooks/useFoods";
import { useItemStore } from "../store/itemStore";
import { useFavoritesStore } from "../store/favoritesStore";
import { deSlugify } from "../utils/slugify";

import Loading from "../components/Loading";
import Header from "../components/Header";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import ItemContent from "../features/item/ItemContent";
import ItemComments from "../features/item/ItemComments";

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
              className="text-neutral-800 dark:text-[#ffd230c8]"
              // onClick={handleRemoveItemFromFavorites}
            />
          ) : (
            <GoHeart
              size={30}
              className="text-neutral-800 dark:text-[#ffd230c8]"
              // onClick={handleAddItemToFavorites}
            />
          )}
        </div>
      </Header>
      <main className="min-h-screen overflow-y-scroll overflow-x-hidden pt-15 flex flex-col items-center">
        {/* <BackButton /> */}
        <div className="bg-neutral-400 w-[100%] h-40 p-2 rounded-b-[50%] scale-180 overflow-hidden">
          <img src={item?.image} alt="item-image" />
        </div>
        <div className="bg-amber-300 dark:bg-neutral-800 h-full pt-18 px-4 flex flex-col gap-4">
          <ItemContent item={item} />
          <div className="flex justify-center">
            <button className="flex justify-center items-center gap-2 bg-neutral-800 dark:bg-amber-300 text-amber-300 dark:text-neutral-800 text-sm 2xl:text-xl p-2 sm:p-3 rounded-lg sm:rounded-xl w-full lg:w-[40%] 2xl:w-[50%] 2xl:h-14 mt-6 shadow lg:cursor-pointer lg:hover:bg-neutral-950 lg:dark:hover:bg-amber-400 transition-all">
              <CiShoppingCart className="text-2xl dark:text-neutral-800 text-amber-300" />{" "}
              Add to cart
            </button>
          </div>
          <ItemComments item={item} />
        </div>
      </main>
    </>
  );
}

export default Item;
