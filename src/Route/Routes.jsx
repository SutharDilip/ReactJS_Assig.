import { Login } from "../Pages/Login/Login";
import { useRoutes } from "react-router-dom";
import { AuthLayout } from "../Layout/AuthLayout";
import { MainLayout } from "../Layout/MainLayout";
import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { View } from "../Pages/ViewPage/View";
import { Cart } from "../Pages/Cart/Cart";

const Routes = () => {
  let routes = useRoutes([
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard/>
        },
        {
            path: "/listview/:categorie",
            element: <View/>
        },
        {
            path: "/cart",
            element: <Cart/>
        }
      ],
    },
  ]);
  return routes;
};

export default Routes;
