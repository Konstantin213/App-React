import React from "react";
import s from './FormsControlls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

    )
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>

    )
}
export const createField = (name, placeholder, validate, component, props = {}, text = '') =>
    <div><Field name={name}
                placeholder={placeholder}
                validate={validate}
                component={component}
                {...props} /> {text}
    </div>


