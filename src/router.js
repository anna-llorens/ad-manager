import App from "./app";
import ErrorPage from "./views/error-view";
import EditView from "./views/edit-view";

import { createBrowserRouter } from "react-router-dom";
import { Body } from "./sections/body";
export const router = createBrowserRouter([
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
        element: <EditView className="main" />,
      },
    ],
  },
]);
