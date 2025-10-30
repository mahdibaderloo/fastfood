import Header from "../components/Header";
import FavoritesItem from "../features/favorites/FavoritesItem";

function Favorites() {
  return (
    <>
      <Header pContent="FAVOR!TES" />
      <main className="overflow-y-scroll pt-22">
        <ul className="flex items-center justify-center flex-wrap gap-2 mt-4 p-2">
          <FavoritesItem />
          <FavoritesItem />
          <FavoritesItem />
          <FavoritesItem />
        </ul>
      </main>
    </>
  );
}

export default Favorites;
