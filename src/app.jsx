import { Outlet } from "react-router-dom";
import { Header } from "./sections/header";
import "./app.scss";
import { ProductsSection } from "./sections/products/products-section";

export default function App() {
  return (
    <div className="app">
      <Header />
      <ProductsSection className="main" />
      <Outlet />
    </div>
  );
}
