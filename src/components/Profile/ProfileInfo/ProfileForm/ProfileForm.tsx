import s from '../../Contacts/Contacts.module.scss';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ProfilePageType} from '../../../../redux/profile-reducer';


const ProfileForm = ({handleSubmit, error, ...rest}: InjectedFormProps<ProfilePageType>) => {
    let inputs = rest.initialValues.contacts && Object.keys(rest.initialValues.contacts).map((key) => {
        return <div key={key}>
            <label>
                <Field type="input" component={'input'} name={'contacts.' + key} key={key}/>
                {key}
            </label>
        </div>
    })
    return (
        <div className={s.contactsLinks}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        {'fullName'}
                        <Field type="input" component={'input'} name={'fullName'} key={'fullName'}/>
                    </label>
                </div>
                <div>
                    <label>
                        {'aboutMe'}
                        <Field type="input" component={'input'} name={'aboutMe'} key={'aboutMe'}/>
                    </label>
                </div>
                <div>
                    <label>
                        {'lookingForAJob'}
                        <Field type="checkbox" component={'input'} name={'lookingForAJob'} key={'lookingForAJob'}/>
                    </label>
                </div>
                <div>
                    <label>
                        {'lookingForAJobDescription'}
                        <Field type="input" component={'input'} name={'lookingForAJobDescription'}
                               key={'lookingForAJobDescription'}/>
                    </label>
                </div>
                <div>
                    Contacts:
                    {inputs}
                </div>
                <button>Save
                </button>
                {error && <p className={s.error}>{error}</p>}
            </form>
        </div>
    )
}

export default reduxForm<ProfilePageType>({form: 'contacts'})(ProfileForm);