import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppContext } from "./app-context";
import { getMockedData } from "./helpers";
const data = getMockedData();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext.Provider value={data}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>
);
