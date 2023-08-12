import { useState } from "react";
import Navbar from "./Navbar";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <h1>
        Anna<span>MIT</span>opia
      </h1>
      <div
        className="burger-menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
          console.log(menuOpen);
        }}
      >
        <span className={`sus ${menuOpen ? "top" : ""}`}></span>
        <span className={`sus ${menuOpen ? "mid" : ""}`}></span>
        <span className={`sus ${menuOpen ? "bottom" : ""}`}></span>
      </div>
      <Navbar menuOpen={menuOpen}/>
      <div className="login-container">
        <button className="login-button">Sign In</button>
      </div>
    </header>
  );
}
