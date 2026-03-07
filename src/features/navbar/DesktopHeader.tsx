import { useNavigate } from "react-router-dom";
import { useFoods } from "../../hooks/useFoods";
import { useTheme } from "../../store/themeStore";

import NavbarLinks from "./NavbarLinks";
import Search from "../../components/Search";
import Filter from "../../components/Filter";

import pizzaIcon from "../../assets/images/pizza.svg";
import pizzaDarkIcon from "../../assets/images/pizza-dark.svg";

import { BsMoonStarsFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";

function DesktopHeader() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { data: foods } = useFoods();

  return (
    <header className="p-2 py-4 fixed right-0 left-0 z-50 bg-amber-300 dark:bg-neutral-800">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="text-xl dark:text-amber-300">P!ZZ</p>
          {theme === "dark" ? (
            <img src={pizzaDarkIcon} alt="pizza" className="w-3.5 rotate-180" />
          ) : (
            <img src={pizzaIcon} alt="pizza" className="w-3.5 rotate-180" />
          )}
        </div>
        <div className="flex items-center ml-4 gap-1">
          <div
            className="w-8 h-8 p-1.5 rounded-full bg-amber-100 flex justify-center items-center cursor-pointer"
            onClick={() => toggleTheme()}
          >
            {theme === "dark" ? (
              <BsMoonStarsFill size={34} color="#2c2c2c" />
            ) : (
              <RiSunLine size={34} color="#2c2c2c" />
            )}
          </div>
          <Search items={foods ?? []} />
          <Filter />
        </div>
        {/* <NavbarLinks /> */}
      </div>
    </header>
  );
}

export default DesktopHeader;
