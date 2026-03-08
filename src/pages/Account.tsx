import Header from "../components/Header";

import { useModalStore } from "../store/modalStore";
import Modal from "../components/Modal";
import BackButton from "../components/BackButton";
import AccountForm from "../features/account/AccountForm";
import AccountPicBox from "../features/account/AccountPicBox";

function Account() {
  const { open } = useModalStore();

  function handleOpenLogoutModal() {
    open({ title: "Are you sure you want to logout?" });
  }

  function handleOpenSaveModal() {
    open({ title: "Are you sure you want to save the changes?" });
  }

  return (
    <>
      <Header
        pContent="ACCOUNT"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-22 sm:pt-24 lg:pt-16 lg:w-[80%] lg:mx-auto h-screen overflow-y-scroll lg:overflow-hidden">
        <BackButton />
        <AccountPicBox />
        <AccountForm />
        <div className="sm:w-80 sm:mx-auto sm:mt-6 lg:hidden">
          <button
            className="w-full h-10 sm:h-11 mt-2 bg-amber-50 dark:bg-amber-50/20 text-amber-300 rounded-xl sm:text-lg sm:mx-auto"
            onClick={handleOpenSaveModal}
          >
            Save
          </button>
          <button
            className="w-full h-10 sm:h-11 mt-2 bg-amber-50 dark:bg-amber-50/20 text-amber-950 rounded-xl sm:text-lg sm:mx-auto"
            onClick={handleOpenLogoutModal}
          >
            Logout
          </button>
        </div>
        <Modal />
      </main>
    </>
  );
}

export default Account;
