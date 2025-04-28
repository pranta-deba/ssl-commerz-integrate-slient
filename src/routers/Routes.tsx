import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
