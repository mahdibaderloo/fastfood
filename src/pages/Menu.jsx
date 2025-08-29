import Filter from "../components/Filter";
import Search from "../components/Search";
import HeaderMenu from "../features/menu/HeaderMenu";

function Menu() {
  return (
    <>
      <HeaderMenu />
      <main className="overflow-y-scroll m-2">
        <div className="flex items-center gap-2">
          <Search />
          <Filter />
        </div>
      </main>
    </>
  );
}

export default Menu;
