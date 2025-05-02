import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Success from "../pages/Success";
import Fail from "../pages/Fail";
import Cancel from "../pages/Cancel";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "fail",
        element: <Fail />,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "ipn-success-payment",
        element: "ipn-success-payment hoice",
      },
    ],
  },
]);
