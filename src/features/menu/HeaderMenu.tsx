import Filter from "../../components/Filter.js";
import Search from "../../components/Search.js";
import pizzaIcon from "../../data/images/pizza.svg";
import pizzaDarkIcon from "../../data/images/pizza-dark.svg";
import { useTheme } from "../../store/themeStore.js";

function HeaderMenu() {
  const { theme } = useTheme();

  return (
    <header className="w-full flex flex-col items-center justify-center py-4 fixed z-50 bg-amber-300 dark:bg-neutral-800">
      <div className="flex mb-4">
        <p className="text-6xl dark:text-amber-300">P!ZZ</p>
        {theme === "dark" ? (
          <img src={pizzaDarkIcon} alt="pizza" className="w-11 rotate-180" />
        ) : (
          <img src={pizzaIcon} alt="pizza" className="w-11 rotate-180" />
        )}
      </div>
      <div className="flex items-center gap-2 px-2">
        <Search />
        <Filter />
      </div>
    </header>
  );
}

export default HeaderMenu;
