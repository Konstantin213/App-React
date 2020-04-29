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

};
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                message: [...state.message, {id: 4, message: body}],
            };
        default :
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;