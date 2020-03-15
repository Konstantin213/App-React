import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="Mihail" id="1" />
        <DialogItem name="Sveta" id="2" />
        <DialogItem name="Kukis" id="3" />
        <DialogItem name="Charger" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Ho are you" />
        <Message message="Hello" />
      </div>
    </div>
  );
};

export default Dialogs;
