import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
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

      <Post
        username="solocode"
        caption="Wow! It works!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post
        username="mouthbreather81"
        caption="That Rocks!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post
        username="erose14"
        caption="Hello World!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
    </div>
  );
}

export default App;
