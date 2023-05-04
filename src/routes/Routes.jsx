import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut/MainLayOut";
import ErrorPage from "../pages/Shared/ErrorPage/Error";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact/Contact";
import Recipes from "../pages/Home/Chef/Recipes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'chef',
            element: <Home />,
          },
        ],
      },
      {
        path: 'chef/:id',
        element: <Recipes></Recipes>,
        loader: ({ params }) =>
          fetch(
            `https://chef-hunter-server-flame.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
    ],
  },
]);
export default router;