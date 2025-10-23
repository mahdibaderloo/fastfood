import Header from "../components/Header";
import Balance from "../features/wallet/Balance";

function Wallet() {
  return (
    <>
      <Header pContent="My Wallet" />
      <main className="overflow-y-scroll p-4 pt-22 h-screen">
        <Balance />
      </main>
    </>
  );
}

export default Wallet;
