import Filter from "../components/Filter";
import Search from "../components/Search";
import HeaderMenu from "../features/menu/HeaderMenu";
import MenuItem from "../features/menu/MenuItem";

function Menu() {
  return (
    <>
      <HeaderMenu />
      <main className="overflow-y-scroll p-4">
        <div className="flex items-center gap-2">
          <Search />
          <Filter />
        </div>
        <ul className="flex items-center justify-center flex-wrap gap-2 mt-4">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Menu;
