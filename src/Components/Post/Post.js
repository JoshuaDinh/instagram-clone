import React from "react";
import "./post.css";

export const Post = () => {
  return (
    <div className="post">
      <h3 className="post-user-name">User name</h3>
      <img
        className="post-image"
        src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <h4 className="post-caption">
        <strong>User name:</strong> caption
      </h4>
    </div>
  );
};
