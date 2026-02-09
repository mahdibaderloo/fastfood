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
      <div className="bg-amber-300 dark:bg-neutral-800">
        <main className="p-4 pt-22 overflow-y-scroll h-screen">
          <SupportForm />
          <SupportLinks />
        </main>
        <div className="w-full h-12"></div>
      </div>
    </>
  );
}

export default Support;
