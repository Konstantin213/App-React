import React from "react";
import s from "./users.module.css";
import userPhoto from './../../assets/img/user.jpg';
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    return (
        <div>
        <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.follow ?
                            <button disabled={props.followInProgress.some(id => id === user.id)} onClick={() => {
                                props.unfollow(user.id);
                            }}>Unfollow</button> :
                            <button disabled={props.followInProgress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id);
                            }}>Follow</button>}
                        </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
        </div>
    )
}
export default User;