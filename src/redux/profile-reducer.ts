import {ActionsTypes, PostItemStateType, PostsType} from './store';


type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type profileReducerActionsTypes = AddPostActionType | UpdateNewTextActionType
type ProfileReducerStateType = {
    posts: PostsType
    messageForNewPost: string
}

const initialState: ProfileReducerStateType = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 1},
        {id: 3, message: 'Hey ho lets go', likeCount: 1}
    ]
}


export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostItemStateType = {
                id: 5,
                message: action.postText,
                likeCount: 0
            }
            state.posts = [newPost, ...state.posts]
            state.messageForNewPost = '';
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText;
            return state
        default :
            return state
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