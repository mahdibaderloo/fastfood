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
      <main className="overflow-y-scroll p-4 lg:pt-16">
        <ToggleThemeBox />
        <GeneralSettings />
        <FeedbackBox />
        <Modal />
        <div className="w-full h-24 sm:h-26"></div>
      </main>
    </div>
  );
}

export default Settings;
