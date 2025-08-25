import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="bg-amber-400 h-screen">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default AppLayout;
