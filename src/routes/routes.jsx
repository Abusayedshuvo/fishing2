import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Destinations from "../pages/Destinations";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/destinations",
        Component: Destinations,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);

export default router;
