import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import ErrorPage from "./views/error-view";
import EditView from "./views/edit-view";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Body } from "./sections/body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products/:productId",
        element: <Body />,
      },
      {
        path: ":productId/:postId/edit",
        element: <EditView />,
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
