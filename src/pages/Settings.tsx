import Header from "../components/Header.js";
import Modal from "../components/Modal.js";
import ToggleThemeBox from "../features/settings/ToggleThemeBox.js";
import GeneralSettings from "../features/settings/GeneralSettings.js";
import FeedbackBox from "../features/settings/FeedbackBox.js";

function Settings() {
  return (
    <div className="min-h-screen bg-amber-300 dark:bg-neutral-800">
      <Header
        classHeader="w-full flex items-center justify-center pt-4"
        pContent="Sett!ngs"
      />
      <main className="overflow-y-scroll p-4 lg:pt-20 lg:overflow-hidden lg:w-[80%] lg:mx-auto xl:w-[1100px] 2xl:w-[1350px]">
        <p className="text-neutral-800 dark:text-amber-200 text-2xl 2xl:text-4xl text-center hidden lg:block">
          SETT!NGS
        </p>
        <ToggleThemeBox />
        <div className="lg:flex lg:items-center lg:gap-4 lg:mt-6">
          <GeneralSettings />
          <FeedbackBox />
        </div>
        <Modal />
        <div className="w-full h-24 sm:h-26 lg:hidden"></div>
      </main>
    </div>
  );
}

export default Settings;
