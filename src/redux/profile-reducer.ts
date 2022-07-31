import {v1} from 'uuid';

export type PostsType = PostItemStateType[]
export type PostItemStateType = {
    id: string
    message: string
    likeCount: number
}
export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type ProfilePhotosType = {
    small: string
    large: string
}
export type ProfilePageType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}
export type ProfileStateType = {
    posts: PostsType
    messageForNewPost: string
    profile: ProfilePageType | null
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type setUserProfileActionType = ReturnType<typeof setUserProfile>


export type profileReducerActionsTypes = AddPostActionType | UpdateNewTextActionType | setUserProfileActionType

const initialState: ProfileStateType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 15},
        {id: v1(), message: 'It\'s my first post', likeCount: 1},
        {id: v1(), message: 'Hey ho lets go', likeCount: 1}
    ],
    profile: null
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
        case 'SET_USER_PROFILE':
            return {...state, profile: {...action.profile}}
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

export const setUserProfile = (profile:ProfilePageType) => {
    return{
        type:'SET_USER_PROFILE',
        profile
    } as const
}