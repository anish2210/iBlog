import React from "react";
import "./NavBar.css"; // Importing the CSS file

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Augmentix</h1>
      </div>
      <div className="user">
        <div className="login">
          <a href="">Login</a>
        </div>
        <div className="signUp">
          <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
