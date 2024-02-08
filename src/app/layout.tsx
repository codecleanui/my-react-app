import { Fragment, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes";
import MantineProvider from "../mantine/provider";
import { useAuth } from "./(auth)/authProvider";
import Loading from "./loading";
import { ConfirmPrivacyPolicy } from "./(auth)/_component/confirmPrivacyPolicy";
import AuthLayout from "./(auth)/_component/authLayout";

function AppLayout() {
  const { isAuthenticated, isConfirmPrivacyPolicyAccepted } = useAuth();
  if (!isAuthenticated || !isConfirmPrivacyPolicyAccepted)
    return (
      <Suspense fallback={<Loading />}>
        <ConfirmPrivacyPolicy>
          <AuthLayout />
        </ConfirmPrivacyPolicy>
      </Suspense>
    );
  else {
    return (
      <Suspense fallback={<Loading />}>
        <Fragment>
          <MantineProvider>
              <RouterProvider router={router} fallbackElement={<Loading />} />
          </MantineProvider>
        </Fragment>
      </Suspense>
    );
  }
}

export default AppLayout;
