import Header from "../components/Header";
import SupportForm from "../features/support/SupportForm";

function Support() {
  return (
    <>
      <Header pContent="Support" />
      <main className="p-4 pt-22 h-screen overflow-hidden">
        <SupportForm />
      </main>
    </>
  );
}

export default Support;
