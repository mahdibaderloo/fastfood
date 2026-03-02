import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="bg-amber-300 dark:bg-neutral-800 font-lilita">
      <Outlet />
      {/* <Loading /> */}
      <Navbar />
    </div>
  );
}

export default AppLayout;
