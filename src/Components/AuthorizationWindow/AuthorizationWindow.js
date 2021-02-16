import React, { useState, useEffect } from "react";
import "./authorization.css";
import logo from "../../Images/logo.png";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../../firebase";

export const AuthorizationWindow = ({ setSignUpModal, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Creates User in firebase db
  const SignUp = (e) => {
    e.preventDefault(e);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: username });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="authorization">
      <div className="authorization-window">
        {" "}
        <CloseIcon
          onClick={() => setSignUpModal(false)}
          className="authorization-close-icon"
        />
        <form onSubmit={() => SignUp()} className="authorization-content">
          <div className="authorization-header-container">
            <img className="authorization-logo" src={logo} />
            <h3 className="authorization-header">Instagram</h3>
          </div>
          <form className="authorization-form">
            <input
              className="authorization-input"
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="authorization-input"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="authorization-input"
              placeholder="Password*"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div onClick={(e) => SignUp(e)} className="authorization-sign-up">
            Sign Up
          </div>
        </form>
      </div>
    </div>
  );
};
