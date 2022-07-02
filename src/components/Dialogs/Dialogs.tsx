import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {
    ActionsTypes,
    DialogsPageType,

} from '../../redux/state';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';


type DialogsPropsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogsState.names
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElements = props.dialogsState.messages
        .map(message => <Message message={message.message} time={message.time}/>)

    let newMessageText = props.dialogsState.newMessageText

    const onClickMessageHandler = () => {
        if(props.dialogsState.newMessageText){
            props.dispatch(sendMessageActionCreator())
        }

    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(text))


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

