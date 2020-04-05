import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPost = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} Like={p.likeCount}/>);
    let newPostElements = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElements.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick= {onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    );

};
export default MyPost;
