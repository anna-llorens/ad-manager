import { Outlet } from "react-router-dom";
import { Header } from "./sections/header";
import { AppContext } from "./app-context";
import "./app.css";
import { ProductsList } from "./components/products-list";

import { data } from "./data";

export default function App() {
  return (
    <AppContext.Provider value={data}>
      <div className="app">
        <Header />
        <ProductsList className="main" />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}
