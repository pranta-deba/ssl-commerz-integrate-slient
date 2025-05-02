import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Success from "../pages/Success";

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
        element: "fail hoice",
      },
      {
        path: "cancel",
        element: "cancel korco",
      },
      {
        path: "ipn-success-payment",
        element: "ipn-success-payment hoice",
      },
    ],
  },
]);
