import React from 'react';
import s from '../Dialogs.module.scss'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {TextArea} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';

export type AddDialogFormDataType = {
    newMessageText: string
}


const AddDialogForm = ({handleSubmit}: InjectedFormProps<AddDialogFormDataType>) => {
    return (
        <form className={s.newMessage} onSubmit={handleSubmit}>
            <Field className={s.textarea} component={TextArea} name="newMessageText"
                   placeholder={'Enter your message'} validate={[required]}/>
            <button>Send</button>
        </form>
    );
};

export default reduxForm<AddDialogFormDataType>({form: 'dialogAddMessage'})(AddDialogForm);