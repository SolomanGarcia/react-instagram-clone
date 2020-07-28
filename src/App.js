import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  // State
  const [posts, setPosts] = useState([
    {
      username: "solocode",
      caption: "Wow! It works!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "solocode",
      caption: "Wow! It works!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>

      <h1>Hello World!</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
