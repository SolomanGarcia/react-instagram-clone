import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt="post"
      />
      <h4>Username: caption</h4>
    </div>
  );
}

export default Post;
