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
import { FaComments, FaMoneyBillWave } from "react-icons/fa6";
import { CiShoppingBasket, CiShoppingCart } from "react-icons/ci";

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
              color="#ffd230c8"
              // onClick={handleRemoveItemFromFavorites}
            />
          ) : (
            <GoHeart
              size={30}
              color="#ffd230c8"
              // onClick={handleAddItemToFavorites}
            />
          )}
        </div>
      </Header>
      <main className="min-h-screen overflow-y-scroll overflow-x-hidden pt-15 flex flex-col items-center">
        <BackButton />
        <div className="bg-neutral-400 w-[100%] h-40 p-2 rounded-b-[50%] scale-180 overflow-hidden">
          <img src={item?.image} alt="item-image" />
        </div>
        <div className="bg-amber-300 h-full pt-18 px-4 flex flex-col gap-4">
          <h3 className="text-xl text-neutral-900">{item?.productName}</h3>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave color="#404040" className="text-sm" />
            <p className="text-neutral-700 text-lg">${item?.price}</p>
          </div>
          <p className="text-justify text-neutral-700 text-sm">
            {item?.description}
          </p>
          <div className="flex justify-center">
            <button className="flex justify-center items-center gap-2 dark:bg-neutral-800 bg-amber-300 dark:text-amber-300 text-neutral-800 text-sm 2xl:text-xl p-2 sm:p-3 rounded-lg sm:rounded-xl w-full lg:w-[40%] 2xl:w-[50%] 2xl:h-14 mt-6 shadow lg:cursor-pointer lg:hover:bg-neutral-950 lg:dark:hover:bg-amber-400 transition-all">
              <CiShoppingCart className="text-2xl text-neutral-800 dark:text-amber-300" />{" "}
              Add to cart
            </button>
          </div>
          <div className="pt-4">
            <div className="flex items-center gap-1">
              <FaComments className="text-sm" color="#262626" />
              <p className="text-sm text-neutral-800">Comments</p>
            </div>
            <ul className="bg-amber-300 w-full pt-2 pb-4 flex items-center gap-2 overflow-x-scroll">
              {item?.comments.map((comment, index) => (
                <li key={index} className="bg-neutral-400 p-2 rounded-xl">
                  <p className="text-sm text-neutral-900">owner</p>
                  <span className="text-[14px] text-neutral-800">
                    {comment}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Item;
