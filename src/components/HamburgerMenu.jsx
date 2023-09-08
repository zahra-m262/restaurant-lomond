import { useState } from "react";

import "./style/HamburgerMenu.scss";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

import { HamburgerItems } from "./HamburgerItems";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(!open);

  return (
    <>
      <IconContext.Provider value={{ color: "#d3ab55" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showMenu} />
          </Link>
        </div>
        <nav className={open ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose onClick={showMenu} id="close-icon" />
              </Link>
            </li>
            {HamburgerItems.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.title}
                      <span>{item.icon}</span>
                    </Link>
                  </li>
                  <hr id="hr" />
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default HamburgerMenu;
