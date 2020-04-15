// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ comments }) => {
  // Add state for the comments

  const [comment] = useState(comments)

  return (
    <div>
      {comment.map((com, index) => {
        return <Comment com={com} key={index} />
      })
        /* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
