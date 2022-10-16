import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls/FormsControls';
import s from '../Login.module.scss'
import {required} from '../../../utils/validators/validators';


export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
    error: string
}

const LoginForm = ({handleSubmit, error, captchaUrl}: InjectedFormProps<LoginFormDataType, {captchaUrl:string | undefined}> & {captchaUrl:string | undefined}) => {
    return (
        <form onSubmit={handleSubmit} className={s.loginWrapper}>
            <div className={s.text}>
                <p>If you are using Safari</p>
                <p>please disable Cross-Origin Restrictions</p>
                <p>{`Preferences >> Advanced, and select`}</p>
                <p>'Disable Cross-Origin Restrictions'</p>
                <p>To log in use common test account credentials:</p>
                <p><b>Email:</b> free@samuraijs.com</p>
                <p><b>Password:</b> free</p>
            </div>
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
            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && <div>
                <Field type="text" placeholder={'Captcha'} name={'captcha'} component={Input} validate={[required]}/>
            </div>}
            {error && <p className={s.error}>{error}</p>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm<LoginFormDataType, {captchaUrl:string | undefined}>({form: 'login'})(LoginForm);