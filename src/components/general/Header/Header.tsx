import Navbar from "./Navbar";
import "./header.css";

export default function Header() {
  return (
    <header className="header-container">
      <h1>
        Anna<span>MIT</span>opia
      </h1>
      <Navbar />
      <div className="login-container">
        <button className="login-button">Sign In</button>
      </div>
    </header>
  );
}
