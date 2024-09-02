import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        const message = await response.text();
        setError(message);
      }
    } catch (error) {
      setError("Error while logging in: " + error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="LoginContainer">
        <div className="upper">
          <p>Login</p>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            className="userEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="userPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleSubmit}>Login</button>
        </div>
        <hr className="hr" />
        <div className="lower">
          <p>
            Already have an account ? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
