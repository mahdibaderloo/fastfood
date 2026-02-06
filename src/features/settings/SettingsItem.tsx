import { CgChevronRight } from "react-icons/cg";
import { useTheme } from "../../store/themeStore";

function SettingsItem({ children, title }) {
  const { theme } = useTheme();

  return (
    <li
      className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a] dark:border-[#fef3c62d]"
      // onClick={}
    >
      <div className="flex items-center justify-start">
        {children}
        <p className="text-neutral-900 dark:text-amber-300 ml-3">{title}</p>
      </div>
      <p>
        {theme === "dark" ? (
          <CgChevronRight size={30} color="#ffd230" />
        ) : (
          <CgChevronRight size={30} color="#2c2c2c96" />
        )}
      </p>
    </li>
  );
}

export default SettingsItem;
