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
type PostItemStateType = {
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
type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    text: string
}
type SendMessageTextActionType = {
    type: 'SEND_MESSAGE'
}
export type ActionsTypes =
    AddPostActionType
    | UpdateNewTextActionType
    | UpdateNewMessageTextActionType
    | SendMessageTextActionType

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

    dispatch(action) { //{type : 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost: PostItemStateType = {
                id: 5,
                message: action.postText,
                likeCount: 0
            }
            this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts]
            this._state.profilePage.messageForNewPost = '';
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange()
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.text;
            this._onChange()
        } else if (action.type === 'SEND_MESSAGE') {
            const message = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, {id: 6, message: message, time: `${new Date().getHours()}:${new Date().getMinutes()}`}]
            this._onChange()
        }
    }
}

export const addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        postText: postText
    }
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewTextActionType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
export const sendMessageActionCreator = ():SendMessageTextActionType =>{
    return {type: 'SEND_MESSAGE'}
}
export const updateNewMessageTextActionCreator = (message:string):UpdateNewMessageTextActionType =>{
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', text:message}
}

export default store