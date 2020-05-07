import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControlls/FormsControlls";
import {required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControlls/FormsControlls.module.css"

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" placeholder={'Email'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field name="password" placeholder={'Password'} validate={[required]} type={'password'} component={Input}/>
            </div>
            <div>
                <Field name="rememberMe" type={"checkbox"} component={Input}/> Remember me
            </div>
            {props.error && <div className={s.formSummeryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to ={'/profile'} />
    }
    return (<div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);