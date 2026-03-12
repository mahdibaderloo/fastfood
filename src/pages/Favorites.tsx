import BackButton from "../components/BackButton";
import Header from "../components/Header";
import AddFavoritesButton from "../features/favorites/AddFavoritesButton";
import FavoritesItem from "../features/favorites/FavoritesItem";
import { useFavoritesStore } from "../store/favoritesStore";

function Favorites() {
  const { items: favorites } = useFavoritesStore();

  return (
    <>
      <Header
        pContent="FAVOR!TES"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="overflow-y-scroll lg:scrollbar-hide pt-20 h-screen lg:w-[80%] xl:w-[1100px] 2xl:w-[1350px] lg:mx-auto lg:p-4 xl:px-2 lg:pt-16">
        <BackButton />
        <ul className="flex items-center justify-start flex-wrap gap-2 p-2 sm:justify-between lg:justify-center sm:mx-auto sm:w-90 lg:w-full lg:mt-4">
          {favorites.map((item) => (
            <FavoritesItem key={item.id} item={item} />
          ))}
        </ul>
        <AddFavoritesButton />
        <div className="w-full h-2"></div>
      </main>
    </>
  );
}

export default Favorites;
