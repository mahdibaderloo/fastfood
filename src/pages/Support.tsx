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
      <main className="p-4 pt-22 sm:pt-24 overflow-y-scroll h-screen bg-amber-300 dark:bg-neutral-800">
        <div className="sm:w-80 sm:mx-auto">
          <SupportForm />
          <SupportLinks />
        </div>
      </main>
    </>
  );
}

export default Support;
