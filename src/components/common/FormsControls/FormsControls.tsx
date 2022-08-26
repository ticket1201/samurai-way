import React from 'react';
import s from './FormControls.module.scss'
import {WrappedFieldProps} from 'redux-form';

type FormElementPropsType = {
    type: string
    children: React.ReactNode
    isError: boolean
} & WrappedFieldProps


const FormElement = ({meta, children, isError}:FormElementPropsType) => {
    return (
        <>
            {children}
            {isError && <p className={s.errorText}>{meta.error}</p>}
        </>
    );
}


export const TextArea = (props:FormElementPropsType) => {
    return (
        <FormElement {...props}>
            <textarea {...props.input} className={s.textarea}/>
        </FormElement>
    );
};


export const Input = (props: FormElementPropsType)=> {
    const isError = {isError: props.meta.touched && props.meta.error}
    return (
        <FormElement {...props} {...isError}>
           <input {...props.input} type={props.type} className={isError.isError ? `${s.error} ${s.input}` : s.input}/>
        </FormElement>
    );
};


