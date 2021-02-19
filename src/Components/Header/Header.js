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

export const Header = ({ setSignUpModal, setSignInModal, user }) => {
  return (
    <div className="header">
      <HeaderLogo />
      <div className="header-auth-container">
        {user ? (
          <div className="header-log-out" onClick={() => auth.signOut()}>
            Log out
          </div>
        ) : (
          <div className="header-auth-container">
            <div
              className="header-sign-up header-auth-button"
              onClick={() => setSignUpModal(true)}
            >
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span> U</span>
              <span>p</span>
            </div>
            <div
              className="header-sign-in  header-auth-button"
              onClick={() => setSignInModal(true)}
            >
              Sign In
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
