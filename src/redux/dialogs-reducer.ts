import {v1} from 'uuid';

export type DialogsPageType = {
    names: NamesItemType[]
    messages: MessageItemType[]
    newMessageText: string
}
type NamesItemType = {
    id: string
    name: string
}
type MessageItemType = {
    id: string
    message: string
    time: string
}


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
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Sanya'},
        {id: v1(), name: 'Olya'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Viktor'},
    ],
    messages: [
        {id: v1(), message: 'Hey', time: '13:15'},
        {id: v1(), message: 'Wats up?', time: '13:20'},
        {id: v1(), message: '????', time: '13:30'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: dialogsReducerActionsTypes):DialogsPageType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {...state, newMessageText: action.text}
        case 'SEND_MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: v1(),
                        message: state.newMessageText,
                        time: `${new Date().getHours()}:${new Date().getMinutes()}`
                    }],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (): SendMessageTextActionType => {
    return {type: 'SEND_MESSAGE'} as const
}
export const updateNewMessageTextActionCreator = (message: string): UpdateNewMessageTextActionType => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', text: message} as const
}