import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls/FormsControls';
import s from '../Login.module.scss'
import {required} from '../../../utils/validators/validators';


export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginWrapper}>
            <div>
                <Field type="text" placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="password" placeholder={'Password'} name={'password'}  component={Input} validate={[required]}/>
            </div>
            <div>
                <label>
                    <Field type="checkbox" component={'input'} name={'rememberMe'}/>
                    Remember me
                </label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm<LoginFormDataType>({form: 'login'})(LoginForm);