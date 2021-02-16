import React from "react";
import "./header.css";
import logo from "../../Images/logo.png";

export const HeaderLogo = () => {
  return (
    <div className="header-section">
      <img className="header-logo" src={logo} />
      <h3 className="header-instagram">Instagram</h3>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
    </div>
  );
};
