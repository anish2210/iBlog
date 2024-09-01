import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="LoginContainer">
        <div className="upper">
          <p>Login</p>
          <input type="email" className="userEmail" placeholder="Email" />
          <input
            type="password"
            className="userPassword"
            placeholder="Password"
          />
          <button className="loginButton">Login</button>
        </div>
        <hr className="hr" />
        <div className="lower">
          <p>Do not have an account ? Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
