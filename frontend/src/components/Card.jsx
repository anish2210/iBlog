import React from 'react';
import "./Card.css";

function Card({imgUrl, title, content, author, postTime, postDate}) {
  
  return (
    <div className='main-content'>
      <div className="blogImg">
        <img src={imgUrl} alt="thumbnail" />
      </div>
      <div className="blog-content">
        <div className="blogTitle">
          <h3>{title}</h3>
        </div>
        <div className="blogText">
          <p>{content}</p>
        </div>
        <div className="userDetail">
          <div className="CardUserName">
            {author}
          </div>
          <div className="postTime">{postTime} {postDate}</div>
        </div>
      </div>
    </div>
  )
}

export default Card