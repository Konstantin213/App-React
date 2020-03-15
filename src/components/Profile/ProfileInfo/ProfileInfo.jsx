import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
