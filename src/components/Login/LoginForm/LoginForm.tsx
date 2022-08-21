import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field type="password" placeholder={'Password'} name={'password'} component={'input'}/>
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

export default reduxForm<FormDataType>({form: 'login'})(LoginForm);