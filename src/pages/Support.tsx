import Header from "../components/Header";
import SupportForm from "../features/support/SupportForm";
import SupportLinks from "../features/support/SupportLinks";

function Support() {
  return (
    <>
      <Header pContent="Support" />
      <main className="p-4 pt-22 h-screen">
        <SupportForm />
        <SupportLinks />
      </main>
    </>
  );
}

export default Support;
