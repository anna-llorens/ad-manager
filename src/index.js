import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import ErrorPage from "./views/error-view";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./sections/posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products/:productId",
        element: <Posts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
