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

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/settings", element: <Settings /> },
      { path: "/cart", element: <Cart /> },
      { path: "/notifications", element: <Notifications /> },
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
    [theme]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
