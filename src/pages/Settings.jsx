import { RiSunLine } from "react-icons/ri";
import HeaderSettings from "../features/settings/HeaderSettings";
import { LiaBugSolid } from "react-icons/lia";
import { CgChevronRight, CgDanger } from "react-icons/cg";
import { LuSend } from "react-icons/lu";
import { GoPerson, GoTrash } from "react-icons/go";
import { IoLogOutOutline, IoNotificationsOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

const isDark = document.querySelector("html").className === "dark";

function Settings() {
  return (
    <>
      <HeaderSettings />
      <main className="overflow-y-scroll p-4">
        <div>
          <p className="text-amber-800 dark:text-amber-100 text-shadow-lg">
            Theme
          </p>
          <div className="flex items-center justify-between p-2">
            <p className="text-neutral-900 dark:text-amber-300">Light mode</p>
            <p>
              {isDark ? (
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
          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a] dark:border-[#fef3c62d]">
            <div className="flex items-center justify-start">
              <p>
                {isDark ? (
                  <GoPerson size={35} color="#ffd230" />
                ) : (
                  <GoPerson size={35} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-3">
                Account
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>

          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a] dark:border-[#fef3c62d]">
            <div className="flex items-center justify-start">
              <p>
                {isDark ? (
                  <IoNotificationsOutline size={35} color="#ffd230" />
                ) : (
                  <IoNotificationsOutline size={35} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-3">
                Notifications
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>

          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a] dark:border-[#fef3c62d]">
            <div className="flex items-center justify-start">
              <p>
                {isDark ? (
                  <IoLogOutOutline size={36} color="#ffd230" />
                ) : (
                  <IoLogOutOutline size={36} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-3">
                Logout
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center justify-start">
              <p>
                {isDark ? (
                  <GoTrash size={34} color="#ffd230" />
                ) : (
                  <GoTrash size={34} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-3">
                Delete account
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-amber-800 dark:text-amber-100 text-shadow-lg">
            Feedback
          </p>
          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center">
              <p>
                {isDark ? (
                  <LiaBugSolid size={35} color="#ffd230" />
                ) : (
                  <LiaBugSolid size={35} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-3">
                Report a bug
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>

          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center">
              <p>
                {isDark ? (
                  <LuSend size={30} color="#ffd230" />
                ) : (
                  <LuSend size={30} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-4">
                Send feedback
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <p>
                {isDark ? (
                  <CgDanger size={30} color="#ffd230" />
                ) : (
                  <CgDanger size={30} color="#171717" />
                )}
              </p>
              <p className="text-neutral-900 dark:text-amber-300 ml-4">
                About us
              </p>
            </div>
            <p>
              {isDark ? (
                <CgChevronRight size={30} color="#ffd230" />
              ) : (
                <CgChevronRight size={30} color="#2c2c2c96" />
              )}
            </p>
          </div>
        </div>

        <div className="w-full h-24"></div>
      </main>
    </>
  );
}

export default Settings;
