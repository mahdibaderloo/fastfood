import { Link } from "react-router-dom";
import pizzaLightIcon from "../../assets/images/pizza.svg";
import pizzaDarkIcon from "../../assets/images/pizza-dark.svg";
import { useTheme } from "../../store/themeStore";

function EmptyCart() {
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 2xl:gap-4 pb-6">
      <p className="w-full text-center mt-4 sm:mt-8 2xl:mt-20 text-amber-900/90 text-lg sm:text-xl 2xl:text-3xl sm:font-semibold">
        Cart is empty !
      </p>
      <Link
        className="underline text-neutral-800 dark:text-amber-300/80 text-[0.8rem] sm:text-[1rem] 2xl:text-lg flex items-center"
        to="/"
      >
        <span>Get Pizza</span>
        <img
          src={theme === "light" ? pizzaLightIcon : pizzaDarkIcon}
          alt="icon"
          className="w-3 sm:w-4 sm:ml-0.5"
        />
      </Link>
    </div>
  );
}

export default EmptyCart;
