import React from 'react';
import s from './FormControls.module.scss'




export const TextArea = ({input, meta, ...props}:any) => {
    const isError = meta.touched && meta.error
    return (
        <>
            <textarea {...input} {...props} className={isError ? `${s.error} ${s.textarea}` : s.textarea}/>
            {isError && <span className={s.errorText}>some error</span>}
        </>
    );
};


/*
export const Input = ({input, meta, ...props}:any) => {
    const isError = meta.touched && meta.error
    return (
        <>
            <textarea {...input} {...props} className={isError ? `${s.error} ${s.textarea}` : s.textarea}/>
            {isError && <span className={s.errorText}>some error</span>}
        </>
    );
};
*/
