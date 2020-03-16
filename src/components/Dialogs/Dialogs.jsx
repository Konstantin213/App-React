import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Mihail" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Kukis" },
    { id: 4, name: "Charger" }
  ];

  let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

  let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Ho are you" },
    { id: 3, message: "Hello" }
  ];

  let messages = messageData.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
