import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    </header>
                    );
                    };

                    export default Header;
