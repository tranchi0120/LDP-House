import React, { Fragment, useState } from "react";
import "../CSS/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <nav>
        <h1 className="logo">
          Downtown<span>.</span>
        </h1>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Agents</a>
            </li>
            <li>
              <a href="#!">About Us</a>
            </li>
          </ul>
          <div className="btn">
            <a href="#!">Add Property</a>
          </div>
        </div>
        <i
          class="fa-sharp fa-solid fa-bars-staggered"
          onClick={() => setShowMenu(!showMenu)}></i>
      </nav>
    </Fragment>
  );
};

export default Navbar;
