import Header from "../components/Header";
import AddFavoritesButton from "../features/favorites/AddFavoritesButton";
import FavoritesItem from "../features/favorites/FavoritesItem";

function Favorites() {
  return (
    <>
      <Header pContent="FAVOR!TES" />
      <main className="overflow-y-scroll pt-22 h-screen">
        <ul className="flex items-center justify-start flex-wrap gap-2 mt-4 p-2">
          <FavoritesItem />
          <FavoritesItem />
          <FavoritesItem />
          <FavoritesItem />
          <AddFavoritesButton />
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Favorites;
