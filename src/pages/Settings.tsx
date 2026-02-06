import { useTheme } from "../store/themeStore.js";

import { RiSunLine } from "react-icons/ri";
import { LiaBugSolid } from "react-icons/lia";
import { CgDanger } from "react-icons/cg";
import { LuSend } from "react-icons/lu";
import { GoPerson, GoTrash } from "react-icons/go";
import { IoLogOutOutline, IoNotificationsOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

import Header from "../components/Header.js";
import SettingsItem from "../features/settings/SettingsItem.js";
import Modal from "../components/Modal.js";
import { useModalStore } from "../store/modalStore.js";

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
    title: "Notifications",
    darkIcon: <IoNotificationsOutline size={35} color="#ffd230" />,
    lightIcon: <IoNotificationsOutline size={35} color="#171717" />,
    url: "/settings/notifications",
  },
  {
    id: 3,
    title: "Logout",
    darkIcon: <IoLogOutOutline size={36} color="#ffd230" />,
    lightIcon: <IoLogOutOutline size={36} color="#171717" />,
    url: undefined,
  },
  {
    id: 4,
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
  const { theme, toggleTheme } = useTheme();
  const { title, isOpen, onClose, onOpen, setTitle } = useModalStore();

  function handleLogoutModal() {
    setTitle("Are you sure you want to logout?");
    onOpen();
  }

  function handleDeleteAccountModal() {
    setTitle(
      "Are you sure you want to DELETE YOUR ACCOUNT? (this action cannot be undone!)",
    );
    onOpen();
  }

  return (
    <>
      <Header
        classHeader="w-full flex items-center justify-center pt-4"
        pContent="Sett!ngs"
      />
      <main className="overflow-y-scroll p-4">
        <div>
          <p className="text-amber-800 dark:text-amber-100 text-shadow-lg">
            Theme
          </p>
          <div
            className="flex items-center justify-between p-2"
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
        <div className="mt-4">
          <p className="text-amber-800 dark:text-amber-100 text-shadow-lg">
            General
          </p>
          <ul>
            {generalItems.map((item) => (
              <SettingsItem
                key={item.id}
                title={item.title}
                url={item.url}
                onClick={
                  item.id === 3 ? handleLogoutModal : handleDeleteAccountModal
                }
              >
                <p>{theme === "dark" ? item.darkIcon : item.lightIcon}</p>
              </SettingsItem>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-amber-800 dark:text-amber-100 text-shadow-lg">
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
        <Modal title={title} isOpen={isOpen} onClose={onClose} />
        <div className="w-full h-24"></div>
      </main>
    </>
  );
}

export default Settings;
