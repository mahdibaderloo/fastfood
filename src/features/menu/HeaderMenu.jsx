import Filter from "../../components/Filter";
import Search from "../../components/Search";
import pizzaIcon from "../../data/images/pizza.svg";

function HeaderMenu() {
  return (
    <header className="w-full flex flex-col items-center justify-center py-4 fixed z-50 bg-amber-300">
      <div className="flex mb-4">
        <p className="text-6xl">PIZZ</p>
        <img src={pizzaIcon} alt="pizza" className="w-11" />
      </div>
      <div className="flex items-center gap-2 px-2">
        <Search />
        <Filter />
      </div>
    </header>
  );
}

export default HeaderMenu;
