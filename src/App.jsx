import { Outlet } from "react-router-dom";
import Products from "./sections/products";
import "./App.css";
export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Ad manager</h1>
        <p>Max's Sporting Goods</p>
      </header>
      <Products />
      <Outlet />
    </div>
  );
}
