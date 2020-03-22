import React from "react";

import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
        </div>
        <div className={s.itemFriends}>
        <NavLink to="/friends" activeClassName={s.active}>
          Friends
        </NavLink><div>
          <img src = 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg' />
          <img src = 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg' />
          <img src = 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg' /></div>
       
      </div>
    </nav>
  );
};

export default Navigation;
