import { BsMoonStarsFill } from "react-icons/bs";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import { useFoods } from "../../hooks/useFoods";
import { RiSunLine } from "react-icons/ri";
import { useTheme } from "../../store/themeStore";

function NavbarTools() {
  const { data: foods } = useFoods();
  const { theme, toggleTheme } = useTheme();

  return (
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
  );
}

export default NavbarTools;
