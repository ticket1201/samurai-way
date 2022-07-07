import React from 'react';
import {storeType} from '../../redux/store';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';


export const DialogsContainer = (props: { store: storeType }) => {
    let store = props.store.getState()

    const onClickMessageHandler = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    const updateNewMessageBody = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }


    return (
        <Dialogs updateNewMessageBody={updateNewMessageBody} onSendMessage={onClickMessageHandler}
                 dialogsState={store.dialogsPage}/>
    );
};

