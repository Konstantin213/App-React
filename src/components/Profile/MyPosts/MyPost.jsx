import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPost = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} Like={p.likeCount}/>);

    let newPostElements = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElements.current.value;
        let action = updateNewPostTextActionCreator(text);

        props.dispatch(action);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    );

}
export default MyPost;
