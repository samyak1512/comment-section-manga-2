import React, { useState } from "react";

const ReplyForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, message });
    setAuthor("");
    setMessage("");
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      {/* <input
        className="reply-author-input"
        type="text"
        placeholder="Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /> */}
      <textarea
        className="reply-message-input"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="reply-submit-button" type="submit">Reply</button>
    </form>
  );
};

export default ReplyForm;
