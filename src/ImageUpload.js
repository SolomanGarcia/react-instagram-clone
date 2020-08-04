import React, { useState } from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {};

  return (
    <div>
      {/* Caption input */}
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      {/* File picker */}
      <input type="file" onChange={handleChange} />
      {/* Post button */}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
