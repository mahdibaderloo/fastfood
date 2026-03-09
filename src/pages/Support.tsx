import BackButton from "../components/BackButton";
import Header from "../components/Header";
import SupportForm from "../features/support/SupportForm";
import SupportLinks from "../features/support/SupportLinks";

function Support() {
  return (
    <>
      <Header
        pContent="SUPPORT"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-22 sm:pt-24 overflow-y-scroll lg:scrollbar-hide lg:w-[80%] lg:mx-auto lg:pt-16 h-screen bg-amber-300 dark:bg-neutral-800">
        <BackButton />
        <div className="sm:w-80 sm:mx-auto lg:w-[95%] lg:flex lg:justify-between">
          <SupportForm />
          <SupportLinks />
        </div>
      </main>
    </>
  );
}

export default Support;
