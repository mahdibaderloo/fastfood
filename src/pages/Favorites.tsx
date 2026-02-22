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
      <main className="overflow-y-scroll pt-22 h-screen">
        <ul className="flex items-center justify-start flex-wrap gap-2 mt-4 p-2">
          {favorites.map((item) => (
            <FavoritesItem key={item.id} item={item} />
          ))}
          <AddFavoritesButton />
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Favorites;
