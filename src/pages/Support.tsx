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
      <main className="p-4 xl:px-2 pt-22 sm:pt-24 overflow-y-scroll lg:overflow-hidden lg:w-[80%] xl:w-[1100px] 2xl:w-[1350px] lg:mx-auto lg:pt-16 2xl:pt-20 min-h-screen bg-amber-300 dark:bg-neutral-800">
        <BackButton />
        <div className="sm:w-80 sm:mx-auto lg:w-[95%] 2xl:w-[88%] lg:flex xl:flex-col lg:justify-between xl:justify-center xl:items-center xl:mt-4">
          <SupportForm />
          <SupportLinks />
        </div>
      </main>
    </>
  );
}

export default Support;
