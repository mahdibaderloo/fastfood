import BackButton from "../components/BackButton";
import Header from "../components/Header";
import Balance from "../features/wallet/Balance";
import Transactions from "../features/wallet/Transactions";

function Wallet() {
  return (
    <>
      <Header
        pContent="WALLET"
        showBackButton={true}
        classP="text-4xl dark:text-amber-300"
      />
      {/* <div className="bg-amber-300 dark:bg-neutral-800"> */}
      <main className="p-4 xl:px-2 pt-22 overflow-y-scroll lg:overflow-hidden h-screen lg:w-[80%] xl:w-[1100px] 2xl:w-[1350px] lg:mx-auto lg:pt-16 2xl:pt-20">
        <BackButton />
        <div className="lg:w-[90%] lg:mx-auto lg:flex lg:rounded-2xl lg:overflow-hidden lg:mt-4 xl:mt-8 2xl:mt-16 xl:h-80">
          <Balance />
          <Transactions />
        </div>
      </main>
      {/* </div> */}
    </>
  );
}

export default Wallet;
