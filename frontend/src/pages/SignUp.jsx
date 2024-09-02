import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, email, password }),
      });

      if (response.ok) {
        setSuccess("User registered successfully!");
        navigate("/login");
      } else {
        const message = await response.text();
        setError(message);
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    }
  };

  return (
    <div>
      <NavBar/>
      <div className="signUpContainer">
        <div className="upper">
          <p>Sign Up</p>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <input 
          type="email" 
          className="userEmail" 
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)} 
          />
          <input type="text" className="userName" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input
            type="password"
            className="userPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="confirmUserPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="singUpButton" onClick={handleSubmit}>Sign Up</button>
        </div>
        <hr className="hr" />
        <div className="lower">
          <p>
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
