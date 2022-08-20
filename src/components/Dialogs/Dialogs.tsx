import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.names
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} time={message.time} key={message.id}/>)

    let newMessageText = props.dialogsPage.newMessageText

    const onClickMessageHandler = () => {
        if (props.dialogsPage.newMessageText) {
            props.onSendMessage()
        }

    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageBody(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea name="" id="" placeholder={'Enter your message'}
                              onChange={onChangeMessageHandler} value={newMessageText}></textarea>
                    <button onClick={onClickMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};

