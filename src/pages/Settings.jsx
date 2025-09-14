import { RiSunLine } from "react-icons/ri";
import HeaderSettings from "../features/settings/HeaderSettings";
import { LiaBugSolid } from "react-icons/lia";
import { CgChevronRight, CgDanger } from "react-icons/cg";
import { LuSend } from "react-icons/lu";
import { GoPerson, GoTrash } from "react-icons/go";
import { IoLogOutOutline, IoNotificationsOutline } from "react-icons/io5";

function Settings() {
  return (
    <>
      <HeaderSettings />
      <main className="overflow-y-scroll p-4">
        <div>
          <p className="text-amber-800 text-shadow-lg">Theme</p>
          <div className="flex items-center justify-between p-2">
            <p className="text-neutral-900">Light mode</p>
            <p>
              <RiSunLine size={30} />
              {/* <BsMoonStarsFill /> */}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-amber-800 text-shadow-lg">General</p>
          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center justify-start">
              <p>
                <GoPerson size={35} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-3">Account</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center justify-start">
              <p>
                <IoNotificationsOutline size={35} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-3">Notifications</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center justify-start">
              <p>
                <IoLogOutOutline size={36} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-3">Logout</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center justify-start">
              <p>
                <GoTrash size={34} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-3">Delete account</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-amber-800 text-shadow-lg">Feedback</p>
          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center">
              <p>
                <LiaBugSolid size={35} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-3">Report a bug</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center">
              <p>
                <LuSend size={30} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-4">Send feedback</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <p>
                <CgDanger size={30} color="#171717" />
              </p>
              <p className="text-neutral-900 ml-4">About us</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>
        </div>

        <div className="w-full h-24"></div>
      </main>
    </>
  );
}

export default Settings;
