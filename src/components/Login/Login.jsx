import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControlls/FormsControlls";
import {required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControlls/FormsControlls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (

        <form onSubmit={handleSubmit}>
            {createField("email", 'Email', [required], Input)}
            {createField("password", 'Password', [required], Input, {type: 'password'})}
            {createField("rememberMe", null, [], Input, {type: 'checkbox'}, 'Remember me')}

            {error && <div className={s.formSummeryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);