const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hey, i am noodles", likeCount: "10"},
        {id: 2, message: "Helloy, it lessons", likeCount: "15"},
        {id: 3, message: "Yo", likeCount: "11"},
        {id: 4, message: "Something", likeCount: "5"}
    ],
    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST  : {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default :
            return state;

    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;