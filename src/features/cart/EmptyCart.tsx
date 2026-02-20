import { Link } from "react-router-dom";
import pizzaLightIcon from "../../assets/images/pizza.svg";
import pizzaDarkIcon from "../../assets/images/pizza-dark.svg";
import { useTheme } from "../../store/themeStore";

function EmptyCart() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center mt-4 text-amber-900/90 text-lg">
        Cart is empty !
      </p>
      <Link
        className="underline text-neutral-800 dark:text-amber-300/80 text-[0.8rem] flex items-center"
        to="/"
      >
        <span>Get Pizza</span>
        <img
          src={theme === "light" ? pizzaLightIcon : pizzaDarkIcon}
          alt="icon"
          className="w-3"
        />
      </Link>
    </div>
  );
}

export default EmptyCart;
