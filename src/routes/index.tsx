import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import RootLayout from "../layouts/RoutLayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SigninPage";
import SignUpPage from "../pages/SignupPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);