import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import Icon from "./projectsrc/icon.png";


const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <img src={Icon} className="iconimg" alt=""/>
      </nav>

      <div className={menu_class}>
        <ul class="list">
          <li class="listitem">
            <a href="#a" class="listlink">
              <FontAwesomeIcon icon={faHome} className="ico" /> Home
            </a>
          </li>
          <li class="listitem">
            <a href="#a" class="listlink">
              <FontAwesomeIcon icon={faCog} className="ico" /> Settings
            </a>
          </li>
          <li class="listitem">
            <a href="#a" class="listlink">
              <FontAwesomeIcon icon={faUser} className="ico" /> Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
