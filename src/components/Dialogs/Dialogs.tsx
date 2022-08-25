import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import AddDialogForm, {AddDialogFormDataType} from './AddDialogForm/AddDialogMessage';


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.names
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} time={message.time} key={message.id}/>)


    const handleSubmit = ({newMessageText}: AddDialogFormDataType) => {
        props.onSendMessage(newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddDialogForm onSubmit={handleSubmit}/>
            </div>
        </div>
    );
};

