import React from 'react';
import s from '../MyPosts.module.scss';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {TextArea} from '../../../common/FormsControls/FormsControls';

export type AddPostFormDataType = {
    newPostText: string
}

const maxLength30 = maxLengthCreator(30)


const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {

    return (
        <form className={s.addPost} onSubmit={props.handleSubmit}>
            <Field component={TextArea} name="newPostText" placeholder={'Enter your post text'} validate={[required, maxLength30]}/>
            <button>Submit</button>
        </form>
    );
};

export default reduxForm<AddPostFormDataType>({form: 'postAddMessage'})(AddPostForm);