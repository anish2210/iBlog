import './Card.css';
import React, { useState } from 'react';

function Card({ imgUrl, title, content, author, postTime, postDate }) {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle function to open/close the blog popup
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="main-content">
      <div className="blogImg">
        {imgUrl ? (
          <img src={imgUrl} alt="thumbnail" />
        ) : (
          <p>Image not available.!!!</p>
        )}
      </div>
      <div className="blog-content">
        <div className="blogTitle">
          <h2>{title}</h2>
        </div>
        <div className="blogText-container">
          <p className="blogText">
            {content.length > 500 ? (
              <>
                {content.slice(0, 500)}...
                <span className="view-more" onClick={toggleModal}>
                  View more
                </span>
              </>
            ) : (
              content
            )}
          </p>
        </div>
        <div className="userDetail">
          <div className="CardUserName">{author}</div>
          <div className="postTime">
            {postTime} {postDate}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="blog-content-popup">
          <div className="header-blog-content">
            <div className="header">
              <h1>{title}</h1>
              <span className="close-btn" onClick={toggleModal}>
                &times;
              </span>
            </div>
            <div className="blog-content">
              <p>{content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
