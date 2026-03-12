import Header from "../components/Header";

import Modal from "../components/Modal";
import BackButton from "../components/BackButton";
import AccountForm from "../features/account/AccountForm";
import AccountPicBox from "../features/account/AccountPicBox";
import AccountMobileButton from "../features/account/AccountMobileButton";

function Account() {
  return (
    <>
      <Header
        pContent="ACCOUNT"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 xl:px-2 pt-22 sm:pt-24 lg:pt-16 2xl:pt-20 lg:w-[80%] xl:w-[1100px] 2xl:w-[1350px] lg:mx-auto h-screen overflow-y-scroll lg:scrollbar-hide">
        <BackButton />
        <AccountPicBox />
        <AccountForm />
        <AccountMobileButton />
        <Modal />
      </main>
    </>
  );
}

export default Account;
