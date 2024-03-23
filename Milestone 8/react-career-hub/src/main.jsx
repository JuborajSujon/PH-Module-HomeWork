import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/Applied Jobs/AppliedJobs";
import ErrorPage from "./components/Error Pages/ErrorPage";
import JobDetails from "./components/Job Details/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/statistics",
        element: <div>statistics</div>,
      },
      {
        path: "/blogs",
        element: <div>blogs</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
