import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout.js";
import Menu from "./pages/Menu.js";
import Dashboard from "./pages/Dashboard.js";
import Notifications from "./pages/Notifications.js";
import Settings from "./pages/Settings.js";
import Cart from "./pages/Cart.js";
import { useTheme } from "./store/themeStore.js";
import { useEffect } from "react";
import Orders from "./pages/Orders.js";
import Favorites from "./pages/Favorites.js";
import Wallet from "./pages/Wallet.js";
import Address from "./pages/Address.js";
import Support from "./pages/Support.js";
import Order from "./pages/Order.js";
import Account from "./pages/Account.js";
import NotificationsSettings from "./pages/NotificationsSettings.js";
import Notification from "./pages/Notification.js";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/address", element: <Address /> },
      { path: "/support", element: <Support /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },

      { path: "/orders", element: <Orders /> },
      { path: "/orders/:orderId", element: <Order /> },

      { path: "/notifications", element: <Notifications /> },
      { path: "/notifications/:notificationId", element: <Notification /> },

      { path: "/settings", element: <Settings /> },
      { path: "/settings/notifications", element: <NotificationsSettings /> },
    ],
  },
]);

function App() {
  const { theme } = useTheme();

  useEffect(
    function () {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [theme],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
