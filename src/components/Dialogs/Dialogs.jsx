import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControlls/FormsControlls";

const maxLength50 = maxLengthCreator(50);


const Dialogs = props => {

    let state = props.dialogsPage;
    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messages = state.message.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}</div>
            <div className={s.messages}>
                <div>{messages}</div>
            </div>
            <AddMessag onSubmit={addNewMessage}/>

        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter Your Message'
                       name='newMessageBody'
                       component={Textarea}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

 const AddMessag = reduxForm({form: 'newMessage'})(AddMessageForm);

export default Dialogs;
