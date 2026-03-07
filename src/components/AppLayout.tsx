import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import DesktopHeader from "../features/navbar/DesktopHeader";

function AppLayout() {
  const location = useLocation();
  const width = window.innerWidth;
  const showNavbar = [
    /^\/$/,
    /^\/cart$/,
    /^\/notifications$/,
    /^\/dashboard$/,
    /^\/settings$/,
  ].some((pattern) => pattern.test(location.pathname));

  return (
    <div className="bg-amber-300 dark:bg-neutral-800 font-lilita">
      {width >= 1024 && <DesktopHeader />}

      <Outlet />
      {showNavbar && width < 1024 && <Navbar />}
    </div>
  );
}

export default AppLayout;
