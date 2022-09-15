import {DialogsPageType, dialogsReducer, sendMessageActionCreator} from './dialogs-reducer';
import {v1} from 'uuid';

let state: DialogsPageType

beforeEach(() => {
    state = {
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
})


test('message should be sent', () => {
    let action = sendMessageActionCreator('wow')
    let newState = dialogsReducer(state, action)
    expect(newState.messages[3].message).toBe('wow')
    expect(newState.messages.length).toBe(4)
})