import React from "react";
import "./index.css";
// import image from src={require('./victor-grabarczyk-r02cXESP0aI-unsplas

const Comment = ({ author, message,image, onDelete, onReply, isReply}) => {
  console.log("image",image)

  return (
    

    <div className={`comment-container ${isReply ? 'comment-reply' : ''}`}>
      <div className="comment-header">
        {/* <img className="comment-image" src={image} alt="user" /> */}
        <h3 className="comment-author"><img className="comment-image" src={(image)} alt="user" />
        
{author}</h3>
      </div>
      <p className="comment-message">{message}</p>
      <button className="comment-delete-btn" onClick={onDelete}>
          Delete
        </button>
        {!isReply && (
          <button className="comment-reply-btn" onClick={onReply}>
            Reply
          </button>
        )}
    </div>
  );
};


export default Comment;
