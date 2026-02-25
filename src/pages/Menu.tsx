import Filter from "../components/Filter.js";
import Header from "../components/Header.js";
import Search from "../components/Search.js";
import MenuItem from "../features/menu/MenuItem.js";
import { useTheme } from "../store/themeStore.js";

import pizzaIcon from "../assets/images/pizza.svg";
import pizzaDarkIcon from "../assets/images/pizza-dark.svg";
import { useFoods } from "../hooks/useFoods.js";
import Loading from "../components/Loading.js";
import { useSearchParams } from "react-router-dom";
import { deSlugify } from "../utils/slugify.js";
import { useEffect, useState } from "react";

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
        <div className="flex items-center gap-2 px-2 h-11">
          <Search items={foods ?? []} />
          <Filter />
        </div>
      </Header>

      <main className="overflow-y-scroll pt-22">
        <ul className="flex flex-wrap items-center justify-center gap-2 mt-14 p-2">
          {filteredSearchItems.length > 0 &&
            filteredSearchItems.map((food) => (
              <MenuItem key={food.id} item={food} />
            ))}
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Menu;
