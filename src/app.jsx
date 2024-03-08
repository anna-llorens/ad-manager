import { Outlet } from "react-router-dom";
import { Header } from "./sections/header";
import { Products } from "./sections/products";
import { AppContext } from "./app-context";
import "./App.css";
import { data } from "./data";

export default function App() {
  return (
    <AppContext.Provider value={data}>
      <div className="app">
        <Header />
        <Products />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}
