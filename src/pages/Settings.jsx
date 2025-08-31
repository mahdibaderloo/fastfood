import { RiSunLine } from "react-icons/ri";
import HeaderSettings from "../features/settings/HeaderSettings";
import { LiaBugSolid } from "react-icons/lia";
import { CgChevronRight, CgDanger } from "react-icons/cg";
import { LuSend } from "react-icons/lu";

function Settings() {
  return (
    <>
      <HeaderSettings />
      <main className="overflow-y-scroll p-4">
        <div>
          <p className="text-neutral-700">Theme</p>
          <div className="flex items-center justify-between p-2">
            <p className="text-neutral-900">Light mode</p>
            <p>
              <RiSunLine size={30} />
              {/* <BsMoonStarsFill /> */}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-neutral-700">Feedback</p>
          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center gap-2">
              <p>
                <LiaBugSolid size={35} color="#171717" />
              </p>
              <p className="text-neutral-900">Report a bug</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2 border-b-2 border-[#2c2c2c1a]">
            <div className="flex items-center gap-3">
              <p>
                <LuSend size={30} color="#171717" />
              </p>
              <p className="text-neutral-900">Send feedback</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-3">
              <p>
                <CgDanger size={30} color="#171717" />
              </p>
              <p className="text-neutral-900">About us</p>
            </div>
            <p>
              <CgChevronRight size={30} color="#2c2c2c96" />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Settings;
