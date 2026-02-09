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
      <div className="bg-amber-300 dark:bg-neutral-800">
        <main className="p-4 pt-22 overflow-y-scroll h-screen">
          <Balance />
          <Transactions />
          <div className="w-full h-18"></div>
        </main>
      </div>
    </>
  );
}

export default Wallet;
