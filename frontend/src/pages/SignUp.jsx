import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="signUpContainer">
        <div className="upper">
          <p>Sign Up</p>
          <input type="email" className="userEmail" placeholder="Email" />
          <input type="text" className="userName" placeholder="Username" />
          <input
            type="password"
            className="userPassword"
            placeholder="Password"
          />
          <input
            type="password"
            className="confirmUserPassword"
            placeholder="Confirm Password"
          />
          <button className="singUpButton">Sign Up</button>
        </div>
        <hr className="hr" />
        <div className="lower">
          <p>Already have an account ? Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
