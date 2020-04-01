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
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({id: 4, message: body});
            return state;
        default :
            return state;
    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;