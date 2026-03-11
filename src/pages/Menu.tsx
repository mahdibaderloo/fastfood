import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFoods } from "../hooks/useFoods.js";
import { useTheme } from "../store/themeStore.js";
import { deSlugify } from "../utils/slugify.js";

import Loading from "../components/Loading.js";
import Filter from "../components/Filter.js";
import Header from "../components/Header.js";
import Search from "../components/Search.js";

import pizzaIcon from "../assets/images/pizza.svg";
import pizzaDarkIcon from "../assets/images/pizza-dark.svg";
import MenuItems from "../features/menu/MenuItems.js";

interface Food {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
}

function Menu() {
  const [filteredSearchItems, setFilteredSearchItems] = useState<Food[]>([]);
  const { theme } = useTheme();
  const { data: foods, isLoading } = useFoods();

  const [searchParams] = useSearchParams();
  const slug = searchParams.get("search") || "";
  const filterSearchParam = deSlugify(slug);

  useEffect(() => {
    if (!foods) return;

    if (!slug) {
      setFilteredSearchItems(foods);
      return;
    }

    const result = foods.filter((food) =>
      food.productName.toLowerCase().includes(filterSearchParam.toLowerCase()),
    );

    setFilteredSearchItems(result);
  }, [slug, foods, filterSearchParam]);

  if (isLoading) return <Loading />;

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
        <div className="flex items-center gap-2 sm:gap-1 px-2 h-11">
          <Search items={foods ?? []} />
          <Filter />
        </div>
      </Header>

      <main className="min-h-screen overflow-y-scroll lg:overflow-hidden pt-22 sm:pt-24 lg:pt-18">
        <MenuItems filteredSearchItems={filteredSearchItems} />
        <div className="w-full h-16 sm:h-19 lg:h-4"></div>
      </main>
    </>
  );
}

export default Menu;
