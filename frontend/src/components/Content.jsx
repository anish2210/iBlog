import React, { useEffect, useState } from "react";
import Card from "./Card";

const Content = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="mainContainer">
      {blogs.map((blog) => (
        <Card
          key={blog._id}
          imgUrl={blog.imgUrl}
          title={blog.title}
          content={blog.content}
          author={blog.author.name}
          postTime={new Date(blog.createdAt).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          postDate={new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
      ))}
    </div>
  );
};

export default Content;
