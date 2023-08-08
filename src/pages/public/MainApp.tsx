import { Outlet } from "react-router-dom";
import "../../App.css";

import Header from "../../components/general/Header/Header";

export default function MainApp() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
}
