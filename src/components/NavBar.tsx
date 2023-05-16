import "./style.css";
import React from "react";

import logo from "../assets/NavBarIcon.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navBarIcon" src={logo} alt="logo" />
      <div className="logo">
        <h1>Star Wars</h1>
      </div>
    </div>
  );
};
export default NavBar;
