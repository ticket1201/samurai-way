import {v1} from 'uuid';

export type DialogsPageType = {
    names: NamesItemType[]
    messages: MessageItemType[]
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

type SendMessageTextActionType = ReturnType<typeof sendMessageActionCreator>
export type dialogsReducerActionsTypes = SendMessageTextActionType

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
}

export const dialogsReducer = (state = initialState, action: dialogsReducerActionsTypes):DialogsPageType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: v1(),
                        message: action.newMessageText,
                        time: `${new Date().getHours()}:${new Date().getMinutes()}`
                    }],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText:string) => {
    return {type: 'SEND_MESSAGE', newMessageText} as const
}
