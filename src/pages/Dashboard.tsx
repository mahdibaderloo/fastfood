import UserInformation from "../features/dashboard/UserInformation.js";
import UserOptions from "../features/dashboard/UserOptions.js";

function Dashboard() {
  return (
    <div className="bg-amber-300 dark:bg-neutral-800">
      <main className="flex flex-col overflow-y-scroll lg:overflow-y-hidden h-screen">
        <UserInformation />
        <UserOptions />
      </main>
      <div className="w-full h-4 lg:hidden"></div>
    </div>
  );
}

export default Dashboard;
