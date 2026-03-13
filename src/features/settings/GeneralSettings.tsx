import { RiSunLine } from "react-icons/ri";
import { GoPerson, GoTrash } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import SettingsItem from "./SettingsItem";
import { useModalStore } from "../../store/modalStore";
import { useTheme } from "../../store/themeStore";

const generalItems = [
  {
    id: 1,
    title: "Account",
    darkIcon: <GoPerson size={35} color="#ffd230" />,
    lightIcon: <GoPerson size={35} color="#171717" />,
    url: "/account",
  },
  {
    id: 2,
    title: "Logout",
    darkIcon: <IoLogOutOutline size={36} color="#ffd230" />,
    lightIcon: <IoLogOutOutline size={36} color="#171717" />,
    url: undefined,
  },
  {
    id: 3,
    title: "Delete Account",
    darkIcon: <GoTrash size={34} color="#ffd230" />,
    lightIcon: <GoTrash size={34} color="#171717" />,
    url: undefined,
  },
];

function GeneralSettings() {
  const { theme } = useTheme();
  const { open } = useModalStore();

  function handleLogoutModal() {
    open({ title: "Are you sure you want to logout?" });
  }

  function handleDeleteAccountModal() {
    open({
      title:
        "Are you sure you want to DELETE YOUR ACCOUNT? (this action cannot be undone!)",
    });
  }
  return (
    <div className="mt-4 sm:w-90 sm:mx-auto lg:w-[45%]">
      <p className="text-amber-800 dark:text-amber-100 text-shadow-lg sm:text-lg 2xl:text-xl">
        General
      </p>
      <ul className="divide-y-2 divide-neutral-700/10 dark:divide-neutral-700/30 2xl:mt-4">
        {generalItems.map((item) => (
          <SettingsItem
            key={item.id}
            title={item.title}
            url={item.url}
            onClick={
              item.id === 2 ? handleLogoutModal : handleDeleteAccountModal
            }
          >
            <p>{theme === "dark" ? item.darkIcon : item.lightIcon}</p>
          </SettingsItem>
        ))}
      </ul>
    </div>
  );
}

export default GeneralSettings;
