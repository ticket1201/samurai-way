import {ActionsTypes, DialogsPageType} from './store';

type UpdateNewMessageTextActionType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    text: string
}
type SendMessageTextActionType = {
    type: 'SEND_MESSAGE'
}

export type dialogsReducerActionsTypes = UpdateNewMessageTextActionType | SendMessageTextActionType

const initialState: DialogsPageType = {
    names: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ],
    messages: [
        {id: 1, message: 'Hey', time: '13:15'},
        {id: 2, message: 'Wats up?', time: '13:20'},
        {id: 3, message: '????', time: '13:30'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
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

export const sendMessageActionCreator = (): SendMessageTextActionType => {
    return {type: 'SEND_MESSAGE'}
}
export const updateNewMessageTextActionCreator = (message: string): UpdateNewMessageTextActionType => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', text: message}
}