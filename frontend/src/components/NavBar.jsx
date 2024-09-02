import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    setIsLoggedIn(false);
  };

  const handleCreateBlogClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Prevent the default navigation behavior
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logoMain">
          <h1>Augmentix</h1>
        </Link>
      </div>
      <div className="user">
        <Link to="/CreateBlog" onClick={handleCreateBlogClick}>
          <div className="createBlog">Create New Blog</div>
        </Link>
        {isLoggedIn ? (
          <div className="logout">
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </div>
        ) : (
          <>
            <div className="login">
              <Link to="/login">Login</Link>
            </div>
            <div className="signUp">
              <Link to="/signup">Sign Up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
