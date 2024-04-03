import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChildrenHome from "../components/Home/ChildrenHome";
import ChildrenHome2 from "../components/Home/ChildrenHome2";
import About from "../components/About/About";
import PrivateRoute from "../components/Private/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Home>
            <ChildrenHome />
            <ChildrenHome2 />
          </Home>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
