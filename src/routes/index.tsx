import { ConfirmPrivacyPolicy } from "../components";
import {
  LoginPage,
  HomePages,
  AppShellContainer,
  Page1,
  Page2,
  Page3,
  Page4,
} from "../pages";
import CentralPage from "../pages/qrGenerator/sr-central";
import NorthEastPage from "../pages/qrGenerator/sr-north-east";
import NorthWestPage from "../pages/qrGenerator/sr-north-west";
import SouthPage from "../pages/qrGenerator/sr-south";
import {
  LoaderFunctionArgs,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
const useProtectedRoute = (
  deafault: LoaderFunctionArgs,
  returnUrl: string = ""
) => {
  const token = localStorage.getItem("token") || null;
  if (!token) {
    return redirect(`/login`);
    // return redirect(`/login?url=${returnUrl}`);
  } else {
    return deafault;
  }
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellContainer />,
    children: [
      {
        index: true,
        element: <HomePages />,
        loader: (defineConfig) => useProtectedRoute(defineConfig),
      },
      {
        path: "/sr-central",
        element: <CentralPage />,
      },
      {
        path: "/sr-north-east",
        element: <NorthEastPage />,
      },
      {
        path: "/sr-south",
        element: <SouthPage />,
      },
      {
        path: "/sr-north-west",
        element: <NorthWestPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ConfirmPrivacyPolicy
        children={<LoginPage />}
        canRender={!localStorage.getItem("acceptPolicy")}
      />
    ),
    loader: () => {
      const token = localStorage.getItem("token") || null;
      if (token) {
        return redirect("/");
      }
      return {};
    },
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
