// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = ({ com }) => {
  return (
    <div className="comment-text">
      <span className="user">{com.username}</span>
      {' '}
      <span className="comment">{com.text}</span>
    </div>
  );
};


export default Comment;
