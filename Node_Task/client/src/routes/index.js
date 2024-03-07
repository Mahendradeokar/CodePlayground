import { createBrowserRouter } from "react-router-dom";
import Admin from "../components/Admin";
import Vendor from "../components/vendor";
import Customer from "../components/customer";
import Login from "../components/auth/login";
import Singup from "../components/auth/singup";
import Layout from "../components/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "singup",
        element: <Singup />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "vendor",
        element: <Vendor />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
    ],
  },
]);

export default routes;
