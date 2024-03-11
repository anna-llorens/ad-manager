import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./sections/header";
import { ProductsSection } from "./sections/products/products-section";
import "./app.scss";

export default function App() {
  const params = useLocation();
  console.log(params);
  return (
    <div className="app">
      <Header />
      <section className="main">
        <div className="product-section">
          <ProductsSection />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}
