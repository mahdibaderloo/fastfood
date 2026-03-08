import { BsMoonStarsFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { useTheme } from "../../store/themeStore";

function ToggleThemeBox() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sm:w-90 sm:mx-auto lg:hidden">
      <p className="text-amber-800 dark:text-amber-100 text-shadow-lg sm:text-lg">
        Theme
      </p>
      <div
        className="flex items-center justify-between p-2 sm:py-4 sm:px-14"
        onClick={toggleTheme}
      >
        <p className="text-neutral-900 dark:text-amber-300">
          {theme === "dark" ? "Dark" : "Light"}
        </p>
        <p>
          {theme === "dark" ? (
            <BsMoonStarsFill color="#ffd230" />
          ) : (
            <RiSunLine size={30} />
          )}
        </p>
      </div>
    </div>
  );
}

export default ToggleThemeBox;
