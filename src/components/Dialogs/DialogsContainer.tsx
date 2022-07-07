import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()

                const onClickMessageHandler = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                const updateNewMessageBody = (text: string) => {
                   store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return (
                    <Dialogs updateNewMessageBody={updateNewMessageBody} onSendMessage={onClickMessageHandler}
                             dialogsState={state.dialogsPage}/>
                )
            }
        }


        </StoreContext.Consumer>
    );
};

