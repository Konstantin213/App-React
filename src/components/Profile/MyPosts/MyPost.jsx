import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hey, i am noodles" />
        <Post message="Helloy, it lessons" />
      </div>
    </div>
  );
};

export default MyPost;
