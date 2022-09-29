import React from 'react';
import LoginForm, {LoginFormDataType} from './LoginForm/LoginForm';
import s from './Login.module.scss'
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type LoginPropsType = {
    isAuth: boolean
    captchaUrl?: string
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login = ({login, isAuth, captchaUrl}:LoginPropsType) => {
    const onSubmit = (formData:LoginFormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.wrapper}>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};


const mapStateToProps = (state:AppStateType) =>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)