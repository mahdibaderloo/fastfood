import UserInformation from "../features/dashboard/UserInformation";
import UserStatistics from "../features/dashboard/UserStatistics";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <UserInformation />
      <UserStatistics />
    </div>
  );
}

export default Dashboard;
