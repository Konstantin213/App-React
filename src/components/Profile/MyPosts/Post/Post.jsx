import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" />
      Message - {props.message}
      <div>Like {props.Like} </div>
    </div>
  );
};

export default Post;
