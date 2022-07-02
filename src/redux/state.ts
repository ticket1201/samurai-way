import {profileReducer, profileReducerActionsTypes} from './profile-reducer';
import {dialogsReducer, dialogsReducerActionsTypes} from './dialogs-reducer';

export type storeType = {
    _state: stateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
export type stateType = {
    profilePage: {
        posts: PostsType
        messageForNewPost: string
    }
    dialogsPage: DialogsPageType

}
export type PostsType = PostItemStateType[]
export type PostItemStateType = {
    id: number
    message: string
    likeCount: number
}
export type DialogsPageType = {
    names: NamesItemType[]
    messages: MessageItemType[]
    newMessageText: string
}
type NamesItemType = {
    id: number
    name: string
}
type MessageItemType = {
    id: number
    message: string
    time: string
}



export type ActionsTypes = profileReducerActionsTypes | dialogsReducerActionsTypes

const store: storeType = {
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It\'s my first post', likeCount: 1},
                {id: 3, message: 'Hey ho lets go', likeCount: 1}
            ]
        }

    },
    _onChange() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}




export default store