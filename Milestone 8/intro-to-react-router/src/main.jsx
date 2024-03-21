import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Contact from "./components/Contact/Contact.jsx";
import UserDetails from "./components/User Details/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/Post Details/PostDetails";
import ErrorNotFound from "./components/Not Found/ErrorNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User />,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails />,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "*",
      //   element: <div>Not Found</div>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
