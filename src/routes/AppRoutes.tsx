import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Pricing from "../pages/Pricing";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/result",
      element: (
        <>
          <SignedIn>
            <Result />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      ),
    },
  ]);
};

export default AppRoutes;
