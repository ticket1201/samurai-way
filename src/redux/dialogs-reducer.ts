import {v1} from 'uuid';
import {AppStateType, AppThunk} from './redux-store';
import {reset} from 'redux-form';

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
        {id: v1(), name: 'Dmitry'},
        {id: v1(), name: 'Aleksander'},
        {id: v1(), name: 'Olya'},
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
                        ...action.payload
                    }],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (login:string, message:string, time:string) => {
    return {type: 'SEND_MESSAGE', payload: {login, message, time}} as const
}
export const sendMessageTC = (message:string):AppThunk => (dispatch, getState:() => AppStateType) => {
    const login = getState().auth.login as string
    const time = `${new Date().getHours()}:${new Date().getMinutes()}`
    dispatch(sendMessageActionCreator(login, message, time))
    dispatch(reset('dialogAddMessage'))
}
