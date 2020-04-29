import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControlls/FormsControlls";
import {required} from "../../utilits/validators/validators";

const LoginForm = (props) => {
    return (

        <form onSubmit={  props.handleSubmit}>
            <div>
                <Field name = "login" placeholder={'Login'} validate={[required]}
                       component = {Input}/>
            </div>
            <div>
                <Field name = "password" placeholder={'Password'} validate={[required]}
                       component = {Input}/>
            </div>
            <div>
                <Field name = "rememberMe" type={"checkbox"}  component = {Input}/>
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>  {
        console.log(formData)
    }
    return (
        <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit = {onSubmit} />
        </div>
    )
}

export default Login;