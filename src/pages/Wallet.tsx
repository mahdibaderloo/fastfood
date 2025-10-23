import Header from "../components/Header";
import Balance from "../features/wallet/Balance";
import Transactions from "../features/wallet/Transactions";

function Wallet() {
  return (
    <>
      <Header pContent="My Wallet" />
      <main className="p-4 pt-22 h-screen overflow-hidden">
        <Balance />
        <Transactions />
      </main>
    </>
  );
}

export default Wallet;
