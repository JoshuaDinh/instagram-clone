import React, { useState, useEffect } from "react";
import "./App.css";
import { AuthorizationWindow } from "./Components/AuthorizationWindow/AuthorizationWindow";
import { Header } from "./Components/Header/Header";
import { ImageUpload } from "./Components/ImageUpload/ImageUpload";
import { Post } from "./Components/Post/Post";
import { auth, db } from "./firebase";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [user, setUser] = useState(null);

  // Handles new posts from Firebase for disply
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <Header
        user={user}
        setSignUpModal={setSignUpModal}
        setSignInModal={setSignInModal}
      />
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Sorry you need to login to upload</h3>
      )}
      {signUpModal && (
        <AuthorizationWindow
          user={user}
          setUser={setUser}
          setSignUpModal={setSignUpModal}
          signUpModal={signUpModal}
        />
      )}
      {signInModal && (
        <AuthorizationWindow
          user={user}
          setUser={setUser}
          setSignInModal={setSignInModal}
          signInModal={signInModal}
        />
      )}
      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imgUrl={post.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default App;
