import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../common/FormsControlls/FormsControlls";


const maxLength10 = maxLengthCreator(10)

const MyPost = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} Like={p.likeCount}/>);
    let newPostElements = React.createRef();

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>{posts}</div>
        </div>
    );

};
const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newPostText'
                       placeholder='Enter your message'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>

    )
}
const AddPostReduxForm = reduxForm({form: 'addPost'})(MyPostForm)

export default MyPost;
