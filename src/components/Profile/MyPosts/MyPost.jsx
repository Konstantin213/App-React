import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  let postData = [
    { id: 1, message: "Hey, i am noodles", likeCount: "10" },
    { id: 2, message: "Helloy, it lessons", likeCount: "15" }
  ];

  let posts = postData.map(p => (
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
