import App from "./app";
import { ErrorPage } from "./components";
import { EditPost } from "./sections/edit-post/edit-post";

import { createBrowserRouter } from "react-router-dom";
import { AdsSection } from "./sections/ads/ads-section";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products/:productId",
        element: <AdsSection />,
      },
      {
        path: ":productId/:postId/edit",
        element: <EditPost />,
      },
    ],
  },
]);
