import { Outlet } from "react-router-dom";
import { Header } from "./sections/headerns/header";
import { Products } from "./sections/products/products";
import { AppContext } from "./app-context;
import "./app.css";
import { data } from "./data;

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
