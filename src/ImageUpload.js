import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "./firebase";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on("state_changed", (snapshot) => {
      // Progress function
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    });
  };

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