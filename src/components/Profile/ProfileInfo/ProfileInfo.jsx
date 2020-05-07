import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import profileAvatarDefault from "./../../../assets/img/user.jpg";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || profileAvatarDefault}/>
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>aboutMe : {props.profile.aboutMe}
            </div>
            <div>facebook : {props.profile.contacts.facebook}
            </div>
            <div className={s.jobsAvatar}>lookingForAJob : {props.profile.lookingForAJob ? <img
                    src='https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447-760x400.jpg'/>
                : <img
                    src='https://steamuserimages-a.akamaihd.net/ugc/45369364728288691/B2919D4F23079C75AC10D1ECA585490A0A7FA962/'/>}
            </div>
            <div>lookingForAJobDescription : {props.profile.lookingForAJobDescription}</div>
        </div>
    );
};

export default ProfileInfo;
