import React from "react";
import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = props => {
  
  let friends = props.state.friendsPage.map ( f => <FriendsItem name={f.name} id={f.id} />);
  
  return (
     <div className = {s.friends}>
       {friends}</div>)
};

export default Friends;

