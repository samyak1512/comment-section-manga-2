import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, message });
    setAuthor("");
    setMessage("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {/* <input
        className="comment-form-author"
        type="text"
        placeholder="Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /> */}
      <textarea
        className="comment-form-message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="comment-form-submit" type="submit">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
