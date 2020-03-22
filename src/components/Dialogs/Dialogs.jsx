import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messages = props.state.message.map(m => <Message message={m.message} />);
  
  let messagesElement = React.createRef ();

  let addMessage = () => {
    let text = messagesElement.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <img src = "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
        {dialogs}</div>
      <div className={s.messages}>{messages}
      <textarea ref = {messagesElement}></textarea>
      <button onClick = {addMessage}>Add message</button></div>
      
    </div>
  );
};

export default Dialogs;
