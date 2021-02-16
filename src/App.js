import React, { useState, useEffect } from "react";
import "./App.css";
import { AuthorizationWindow } from "./Components/AuthorizationWindow/AuthorizationWindow";
import { Header } from "./Components/Header/Header";
import { Post } from "./Components/Post/Post";
import { auth, db } from "./firebase";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [signUpModal, setSignUpModal] = useState(false);
  const [user, setUser] = useState(null);

  // takes snapshot of database and uploads  document to posts state
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
      <Header user={user} setSignUpModal={setSignUpModal} />
      {signUpModal && (
        <AuthorizationWindow
          setUser={setUser}
          setSignUpModal={setSignUpModal}
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
