import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, i am noodles", likeCount: "10"},
                {id: 2, message: "Helloy, it lessons", likeCount: "15"},
                {id: 3, message: "Yo", likeCount: "11"},
                {id: 4, message: "Something", likeCount: "5"}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Mihail"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Kukis"},
                {id: 4, name: "Charger"}
            ],
            message: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Ho are you"},
                {id: 3, message: "Hello"}
            ],
            newMessageBody: ''
        },

        sidebar: {
            friendsPage: [
                {id: 1, name: "Kratos"},
                {id: 2, name: "Serega"},
                {id: 3, name: "Vasilisa"}
            ]
        }
    },
    _callSubscriber() {
        console.log('weeeery');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    },
};


export default store;