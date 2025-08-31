import { RiSunLine } from "react-icons/ri";
import HeaderSettings from "../features/settings/HeaderSettings";

function Settings() {
  return (
    <>
      <HeaderSettings />
      <main className="overflow-y-scroll p-4">
        <div>
          <p className="text-neutral-700">Theme</p>
          <div className="flex items-center justify-between p-2">
            <p>Light mode</p>
            <p>
              <RiSunLine size={30} />
              {/* <BsMoonStarsFill /> */}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Settings;
