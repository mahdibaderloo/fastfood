import Search from "../components/Search";
import HeaderMenu from "../features/menu/HeaderMenu";

function Menu() {
  return (
    <>
      <HeaderMenu />
      <main className="overflow-y-scroll">
        <div>
          <Search />
        </div>
      </main>
    </>
  );
}

export default Menu;
