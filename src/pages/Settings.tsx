import { useTheme } from "../store/themeStore.js";

import { RiSunLine } from "react-icons/ri";
import { LiaBugSolid } from "react-icons/lia";
import { CgDanger } from "react-icons/cg";
import { LuSend } from "react-icons/lu";
import { GoPerson, GoTrash } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

import Header from "../components/Header.js";
import SettingsItem from "../features/settings/SettingsItem.js";
import Modal from "../components/Modal.js";
import { useModalStore } from "../store/modalStore.js";
import ToggleThemeBox from "../features/settings/ToggleThemeBox.js";

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

function Settings() {
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
    <div className="min-h-screen bg-amber-300 dark:bg-neutral-800">
      <Header
        classHeader="w-full flex items-center justify-center pt-4"
        pContent="Sett!ngs"
      />
      <main className="overflow-y-scroll p-4">
        <ToggleThemeBox />
        <div className="mt-4 sm:w-90 sm:mx-auto">
          <p className="text-amber-800 dark:text-amber-100 text-shadow-lg sm:text-lg">
            General
          </p>
          <ul>
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
        <Modal />
        <div className="w-full h-24 sm:h-26"></div>
      </main>
    </div>
  );
}

export default Settings;
