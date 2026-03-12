import { useNavigate } from "react-router-dom";
import { useTheme } from "../../store/themeStore";

import NavbarLinks from "./NavbarLinks";

import pizzaIcon from "../../assets/images/pizza.svg";
import pizzaDarkIcon from "../../assets/images/pizza-dark.svg";

import NavbarTools from "./NavbarTools";

function DesktopHeader() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <header className="p-2 py-4 fixed right-0 left-0 z-50 bg-amber-300 dark:bg-neutral-800">
      <div className="w-[80%] xl:w-[1200px] 2xl:w-[1420px] mx-auto flex items-center justify-between">
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
        <NavbarTools />
        <NavbarLinks />
      </div>
    </header>
  );
}

export default DesktopHeader;
