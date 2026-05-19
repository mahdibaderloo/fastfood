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
import toast from "react-hot-toast";
import { Food } from "../types/types";
import Button from "../components/Button";

function Item() {
  const { data: items, isLoading } = useFoods();
  const { item, setItem } = useItemStore();
  const {
    items: favorites,
    addItem: addFavorite,
    removeItem: removeFavorite,
  } = useFavoritesStore();

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

  if (!item) return <p>Food not found</p>;

  function handleAddItemToFavorites() {
    addFavorite(item as Food);
    toast.success("Product successfully added to favorites");
  }

  function handleRemoveItemFromFavorites() {
    removeFavorite((item as Food).id);
    toast.success("Product successfully removed from favorites");
  }

  return (
    <>
      <Header showBackButton={true}>
        <div className="mr-3">
          {item.isFavorite ? (
            <GoHeartFill
              size={30}
              className="text-neutral-800 dark:text-[#ffd230c8]"
              onClick={handleRemoveItemFromFavorites}
            />
          ) : (
            <GoHeart
              size={30}
              className="text-neutral-800 dark:text-[#ffd230c8]"
              onClick={handleAddItemToFavorites}
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
          <Button
            text="Add to cart"
            bg="bg-neutral-800"
            darkBg="bg-amber-300"
            textColor="text-amber-300"
            textDarkColor="text-neutral-800"
          >
            <CiShoppingCart className="text-2xl dark:text-neutral-800 text-amber-300" />
          </Button>
          <ItemComments item={item} />
        </div>
      </main>
    </>
  );
}

export default Item;
