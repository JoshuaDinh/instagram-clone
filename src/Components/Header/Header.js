import React from "react";
import "./header.css";
import logo from "../../Images/logo.png";
import { auth } from "../../firebase";

export const HeaderLogo = () => {
  return (
    <div className="header-section">
      <img className="header-logo" src={logo} />
      <h3 className="header-instagram">Instagram</h3>
    </div>
  );
};

export const Header = ({ setSignUpModal, user }) => {
  return (
    <div className="header">
      <HeaderLogo />
      {user ? (
        <div
          className="header-log-out header-auth-button"
          onClick={auth.signOut()}
        >
          Log out
        </div>
      ) : (
        <div className="header-auth-container">
          <div
            className="header-sign-up header-auth-button"
            onClick={() => setSignUpModal(true)}
          >
            Sign Up
          </div>
          <div className="header-sign-in ">Sign In</div>
        </div>
      )}
    </div>
  );
};
