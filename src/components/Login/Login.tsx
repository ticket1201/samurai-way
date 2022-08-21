import React from 'react';
import LoginForm, {FormDataType} from './LoginForm/LoginForm';
import s from './Login.module.scss'



export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

