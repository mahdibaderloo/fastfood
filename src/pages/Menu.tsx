// import { useQuery } from "@tanstack/react-query";
import Filter from "../components/Filter.js";
import Header from "../components/Header.js";
import Search from "../components/Search.js";
import MenuItem from "../features/menu/MenuItem.js";
import { useTheme } from "../store/themeStore.js";

import pizzaIcon from "../data/images/pizza.svg";
import pizzaDarkIcon from "../data/images/pizza-dark.svg";

function Menu() {
  const { theme } = useTheme();
  // const { data } = useQuery({
  //   queryKey: ["pizzas"],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       "https://68ed49cfdf2025af78ffc455.mockapi.io/pizza"
  //     );
  //     const data = await response.json();
  //     return data;
  //   },
  // });
  // console.log(data);

  return (
    <>
      <Header
        classHeader="w-full flex flex-col items-center justify-center py-4 fixed z-50 bg-amber-300 dark:bg-neutral-800"
        classP="text-6xl dark:text-amber-300"
      >
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
      </Header>
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
