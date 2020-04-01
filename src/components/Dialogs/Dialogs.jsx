import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = props => {

    let state = props.store.getState().dialogsPage;

    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = state.message.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogs}</div>
            <div className={s.messages}>
                <div>{messages}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter Your Message'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
