import React from 'react';
import LoginForm, {LoginFormDataType} from './LoginForm/LoginForm';
import s from './Login.module.scss'
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = ({login, isAuth}:LoginPropsType) => {
    const onSubmit = (formData:LoginFormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};


const mapStateToProps = (state:AppStateType) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)