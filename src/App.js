import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./index.css";
// import image from my-app\src\profileIcon_mgukerzbivna1.jpg
// import samyak from "./logo.svg";


function App() {
  let [comments] = useState([
    {
      author: "Alice",
      message:
        "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
      image:"./profileIcon_mgukerzbivna1.jpg", // add image property
    },
    {
      author: "Bob",
      message:
        "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
      // image: samyak, // add image property
      image:"./profileIcon_mgukerzbivna1.jpg"
    },
    {
      author: "Charlie",
      message:
        "The article is very informative. I have been working as a UX designer for 3 years and I have never thought about the design strategy. I will definitely use the tips from the article in my future projects.",
        image:"./profileIcon_mgukerzbivna1.jpg"
    },
  ]);
  
  const [replies, setReplies] = useState([
    { parentIndex: 0, author: "Alice", message: "Thank you for your comment!" },
  ]);

  // const handleCommentSubmit = (comment) => {
  //   setComments([...comments, comment]);
  // };

  return (
    <div className="app-container">
      <CommentList
        comments={comments}
        replies={replies}
        // onCommentSubmit={handleCommentSubmit}
        onReplySubmit={(reply, parentIndex) => {
          setReplies([...replies, { parentIndex, ...reply }]);
        }}
      />
      <CommentForm 
      // onCommentSubmit={handleCommentSubmit}
       />
    </div>
  );
}

export default App;
