import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFoods } from "../hooks/useFoods";
import { useItemStore } from "../store/itemStore";
import { useFavoritesStore } from "../store/favoritesStore";
import { deSlugify } from "../utils/slugify";

import Loading from "../components/Loading";

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

  return <div>{item?.productName}</div>;
}

export default Item;
