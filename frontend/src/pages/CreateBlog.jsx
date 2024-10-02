import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import './CreateBlog.css';
import dotenv from 'dotenv';

dotenv.config({});

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      // Redirect to login if not logged in
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const home = import.meta.env.SERVER;

    try {
      const response = await fetch(home, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Pass the token in the header
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error("Failed to create the post");
      }

      const data = await response.json();
      console.log("Post created:", data);
      navigate("/"); // Redirect to home or the newly created post
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
    <NavBar/>
      <h2>Create New Blog Post</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
      ) : (
        <p>You must be logged in to create a blog post.</p>
      )}
    </div>
  );
}

export default CreateBlog;
