import UserInformation from "../features/dashboard/UserInformation.js";
import UserOptions from "../features/dashboard/UserOptions.js";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <UserInformation />
      <UserOptions />
    </div>
  );
}

export default Dashboard;
