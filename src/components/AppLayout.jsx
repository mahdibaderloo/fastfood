import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="bg-amber-300 h-screen">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default AppLayout;
