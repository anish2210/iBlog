import React, { useState } from "react";
import './Card.css';
import './Content.css';

// BlogCard Component
const BlogCard = ({ title, content, image, username, postTime }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => setShowPopup(!showPopup);

  return (
    <div className="main-content">
      <div className="blogImg">
        <img src={image} alt="Blog Post" />
      </div>
      <div className="blog-content">
        <div className="blogTitle">
          <h2>{title}</h2>
        </div>
        <div className="blogText-container">
          <p className="blogText">{content.substring(0, 100)}...</p>
        </div>
        <div className="view-more" onClick={handlePopup}>
          View More
        </div>
        <div className="userDetail">
          <span className="CardUserName">{username}</span>
          <span className="postTime">{postTime}</span>
        </div>
      </div>

      {showPopup && (
        <BlogPopup
          title={title}
          content={content}
          onClose={handlePopup}
        />
      )}
    </div>
  );
};

// BlogPopup Component
const BlogPopup = ({ title, content, onClose }) => (
  <div className="blog-content-popup" onClick={onClose}>
    <div className="header-blog-content">
      <div className="header">
        <h3>{title}</h3>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="blog-content">
        <p>{content}</p>
      </div>
    </div>
  </div>
);

// BlogGrid Component
const BlogGrid = ({ blogs }) => {
  return (
    <div className="mainContainer">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          content={blog.content}
          image={blog.image}
          username={blog.username}
          postTime={blog.postTime}
        />
      ))}
    </div>
  );
};

// App Component for rendering
const App = () => {
  const blogs = [
    {
      title: "First Blog Post",
      content: "This is a short excerpt of the blog content.",
      image: "image_url.jpg",
      username: "Author1",
      postTime: "2 hours ago",
    },
    {
      title: "Second Blog Post",
      content: "Another short content for a blog post...",
      image: "image_url_2.jpg",
      username: "Author2",
      postTime: "1 day ago",
    },
  ];

  return <BlogGrid blogs={blogs} />;
};

export default App;
