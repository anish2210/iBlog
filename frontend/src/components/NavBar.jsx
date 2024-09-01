import React from "react";
import "./NavBar.css"; // Importing the CSS file
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Augmentix</h1>
      </div>
      <div className="user">
        <div className="login">
          <Link to="/login">
            <a href="">Login</a>
          </Link>
        </div>
        <Link to="/signup">
          <div className="signUp">
            <a href="">Sign Up</a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
