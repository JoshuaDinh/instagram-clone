import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";

export const Post = ({ imgUrl, username, caption }) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar className="post-avatar" />
        <h3 className="post-user-name">{username}</h3>
      </div>

      <img className="post-image" src={imgUrl} />
      <h4 className="post-caption">
        <strong>User name:</strong> {caption}
      </h4>
    </div>
  );
};
