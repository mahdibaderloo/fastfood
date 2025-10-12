import HeaderMenu from "../features/menu/HeaderMenu.js";
import MenuItem from "../features/menu/MenuItem.js";

function Menu() {
  return (
    <>
      <HeaderMenu />
      <main className="overflow-y-scroll pt-22">
        <ul className="flex items-center justify-center flex-wrap gap-2 mt-14 p-2">
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
