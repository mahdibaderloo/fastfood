import { ReactNode } from "react";
import { CgChevronLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../store/themeStore";

interface Props {
  children?: string | ReactNode;
  classHeader?: string;
  classP?: string;
  pContent?: ReactNode;
  showBackButton?: boolean;
}

function Header({
  children,
  classHeader = "w-full flex items-center justify-center py-4 fixed z-50 bg-amber-300 dark:bg-neutral-800",
  classP = "text-5xl dark:text-amber-300",
  pContent = " ",
  showBackButton = false,
}: Props) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <header className={classHeader}>
      {showBackButton ? (
        <div
          className={`w-full flex items-center ${showBackButton ? "justify-between" : "justify-center"} px-2`}
        >
          <button aria-label="Back" className="" onClick={() => navigate(-1)}>
            <CgChevronLeft
              size={40}
              color={theme === "dark" ? "#ffd230" : "#262626"}
            />
          </button>

          <p className={classP}>{pContent}</p>
          <span>
            <CgChevronLeft
              size={40}
              color={theme === "dark" ? "#262626" : "#ffd230"}
            />
          </span>
        </div>
      ) : (
        <p className={classP}>{pContent}</p>
      )}
      {children}
    </header>
  );
}

export default Header;
