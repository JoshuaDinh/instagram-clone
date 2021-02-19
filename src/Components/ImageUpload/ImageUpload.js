import React, { useState } from "react";
import "./imageupload.css";
import firebase from "firebase";
import { db, storage } from "../../firebase";

export const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    // Uploads images to Firebase
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    // keeps track of uploading progress bar
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransfered / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },

      // Access uploaded image
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // Adds captured information to Posts colelction in Firebase
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serveTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="image-upload">
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onClick={handleChange} />
      <div className="image-upload-button" onClick={handleUpload}>
        Upload
      </div>
    </div>
  );
};
