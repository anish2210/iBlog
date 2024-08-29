import React from 'react';
import "./Card.css";

function Card() {
  return (
    <div className='main-content'>
      <div className="blogImg">
        <img src="" alt="thumbnail" />
      </div>
      <div className="blog-content">
        <div className="blogText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, cum amet? Iusto numquam, tempora vel ex ullam maiores quos illo voluptas quaerat quod itaque natus nobis hic fugit, voluptates quidem qui, accusamus iste error enim quam animi culpa repudiandae. Explicabo?</p>
        </div>
        <div className="userDetail">
          <div className="userName">
            Anish Jaiswal
          </div>
          <div className="postTime">X hrs Ago</div>
        </div>
      </div>
    </div>
  )
}

export default Card