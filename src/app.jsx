import { Outlet } from "react-router-dom";
import { Header } from "./sections/header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
