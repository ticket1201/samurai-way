import {v1} from 'uuid';

export type PostsType = PostItemStateType[]
export type PostItemStateType = {
    id: string
    message: string
    likeCount: number
}
export type ProfileStateType = {
    posts: PostsType
    messageForNewPost: string
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type profileReducerActionsTypes = AddPostActionType | UpdateNewTextActionType

const initialState: ProfileStateType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 15},
        {id: v1(), message: 'It\'s my first post', likeCount: 1},
        {id: v1(), message: 'Hey ho lets go', likeCount: 1}
    ]
}


export const profileReducer = (state = initialState, action: profileReducerActionsTypes): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostItemStateType = {
                id: v1(),
                message: state.messageForNewPost,
                likeCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], messageForNewPost: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, messageForNewPost: action.newText}
        default :
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewTextActionType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}