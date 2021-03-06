
import React from "react";
import s from "./../Friends.module.css";
import { NavLink } from "react-router-dom";


const FriendsItem = props => {
  let path = "/friends/" + props.id;
  return (
    <div className={s.friends + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default FriendsItem;


