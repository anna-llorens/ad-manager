import { Outlet } from "react-router-dom";
import { Header } from "./sections/header";

import { AppContext } from "./app-context";
import "./App.css";
import { data } from "./data";

export default function App() {
  return (
    <AppContext.Provider value={data}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}
