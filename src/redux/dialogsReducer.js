const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                message: [...state.message, {id: 4, message: body}],
            };
        default :
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;