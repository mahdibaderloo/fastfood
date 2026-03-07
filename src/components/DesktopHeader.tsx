import pizzaIcon from "../assets/images/pizza.svg";
import pizzaDarkIcon from "../assets/images/pizza-dark.svg";
import { useTheme } from "../store/themeStore";

function DesktopHeader() {
  const { theme } = useTheme();

  return (
    <header>
      <div className="flex mb-4">
        <p className="text-6xl dark:text-amber-300">P!ZZ</p>
        {theme === "dark" ? (
          <img src={pizzaDarkIcon} alt="pizza" className="w-11 rotate-180" />
        ) : (
          <img src={pizzaIcon} alt="pizza" className="w-11 rotate-180" />
        )}
      </div>
    </header>
  );
}

export default DesktopHeader;
