import DashboardPage from "../app/(main)/dashboard/page";
import ShellLayout from "../app/(main)/layout";
import NotFound from "../app/not-found";
import QrGeneratorPage from "../app/(main)/qr-generator/page";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShellLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/qr-generator",
        element: <QrGeneratorPage />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
