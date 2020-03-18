import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = props => {
  let posts = props.posts.map(p => (
    <Post message={p.message} Like={p.likeCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPost;
