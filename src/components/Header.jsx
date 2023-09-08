import { Link } from "react-router-dom";

import "./style/Header.scss";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="container" dir="rtl">
      <HamburgerMenu />
      <div className="items-container">
        <div className="header-container">
          <div style={{ marginLeft: "1rem" }}>
            <h1 className="main-name">Lomond Restaurant</h1>
            <p className="sub-name">The Bests For You</p>
          </div>
          <Link to="/">
            <i className="logo">
              <ion-icon name="restaurant"></ion-icon>
            </i>
          </Link>
        </div>
        <div className="header-banner">
          <h1 className="main-heading">Welcome</h1>
          <h3 className="sub-heading">A Pleasant Taste Experience</h3>
          <Link to="/cart">
            <button type="button" className="main-btn">
              reservation
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
