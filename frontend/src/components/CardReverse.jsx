import React from 'react';
import "./CardReverse.css";

function CardReverse() {
  return (
    <div className='main-content-reverse'>
      <div className="blog-content-reverse">
        <div className="blogTextreverse">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, cum amet? Iusto numquam, tempora vel ex ullam maiores quos illo voluptas quaerat quod itaque natus nobis hic fugit, voluptates quidem qui, accusamus iste error enim quam animi culpa repudiandae. Explicabo?</p>
        </div>
        <div className="userDetailreverse">
          <div className="userNamereverse">
            Anish Jaiswal
          </div>
          <div className="postTimereverse">X hrs Ago</div>
        </div>
      </div>
      <div className="blogImgreverse">
        <img src="" alt="thumbnailreverse" />
      </div>
    </div>
  )
}

export default CardReverse