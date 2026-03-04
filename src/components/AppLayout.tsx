import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  const location = useLocation();
  const showNavbar = [
    /^\/$/,
    /^\/cart$/,
    /^\/notifications$/,
    /^\/dashboard$/,
    /^\/settings$/,
  ].some((pattern) => pattern.test(location.pathname));

  return (
    <div className="bg-amber-300 dark:bg-neutral-800 font-lilita">
      <Outlet />
      {/* <Loading /> */}
      {showNavbar && <Navbar />}
    </div>
  );
}

export default AppLayout;
