import {ActionsTypes, DialogsPageType} from './state';

type UpdateNewMessageTextActionType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    text: string
}
type SendMessageTextActionType = {
    type: 'SEND_MESSAGE'
}

export type dialogsReducerActionsTypes = UpdateNewMessageTextActionType | SendMessageTextActionType

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.newMessageText = action.text;
            return state
        case 'SEND_MESSAGE':
            const message = state.newMessageText
            state.newMessageText = ''
            state.messages = [...state.messages, {
                id: 6,
                message: message,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            }]
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = ():SendMessageTextActionType =>{
    return {type: 'SEND_MESSAGE'}
}
export const updateNewMessageTextActionCreator = (message:string):UpdateNewMessageTextActionType =>{
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', text:message}
}