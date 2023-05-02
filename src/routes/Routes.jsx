import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut/MainLayOut";
import ErrorPage from "../pages/Shared/ErrorPage/Error";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'registration',
        element:<Registration/>
      }
    ]
  }
])
export default router;