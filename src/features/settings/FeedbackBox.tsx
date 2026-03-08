import { useTheme } from "../../store/themeStore";

import SettingsItem from "./SettingsItem";

import { LiaBugSolid } from "react-icons/lia";
import { CgDanger } from "react-icons/cg";
import { LuSend } from "react-icons/lu";

const feedbackItems = [
  {
    id: 1,
    title: "Report a bug",
    darkIcon: <LiaBugSolid size={35} color="#ffd230" />,
    lightIcon: <LiaBugSolid size={35} color="#171717" />,
    url: "/support",
    onClick: () => {},
  },
  {
    id: 2,
    title: "Send feedback",
    darkIcon: <LuSend size={30} color="#ffd230" />,
    lightIcon: <LuSend size={30} color="#171717" />,
    url: undefined,
    onClick: () => {
      window.open(
        "https://github.com/mahdibaderloo/fastfood",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    id: 3,
    title: "About us",
    darkIcon: <CgDanger size={30} color="#ffd230" />,
    lightIcon: <CgDanger size={30} color="#171717" />,
    url: undefined,
    onClick: () => {
      window.open(
        "https://github.com/mahdibaderloo",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
];

function FeedbackBox() {
  const { theme } = useTheme();

  return (
    <div className="mt-4 sm:w-90 sm:mx-auto">
      <p className="text-amber-800 dark:text-amber-100 text-shadow-lg sm:text-lg">
        Feedback
      </p>
      <ul className="">
        {feedbackItems.map((item) => (
          <SettingsItem
            key={item.id}
            title={item.title}
            url={item.url}
            onClick={item.onClick}
          >
            <p>{theme === "dark" ? item.darkIcon : item.lightIcon}</p>
          </SettingsItem>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackBox;
