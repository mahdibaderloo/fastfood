import UserInformation from "../features/dashboard/UserInformation.js";
import UserOptions from "../features/dashboard/UserOptions.js";

function Dashboard() {
  return (
    <div className="bg-amber-300 dark:bg-neutral-800">
      <div className="flex flex-col overflow-y-scroll h-screen">
        <UserInformation />
        <UserOptions />
      </div>
      <div className="w-full h-8"></div>
    </div>
  );
}

export default Dashboard;
