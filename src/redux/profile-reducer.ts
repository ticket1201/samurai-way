import {v1} from 'uuid';
import {profileAPI, usersAPI} from '../api/api';
import {Dispatch} from 'redux';

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
    status: string
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setStatusActionType = ReturnType<typeof setStatus>

export type profileReducerActionsTypes =
    AddPostActionType
    | UpdateNewTextActionType
    | setUserProfileActionType
    | setStatusActionType

const initialState: ProfileStateType = {
    messageForNewPost: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 15},
        {id: v1(), message: 'It\'s my first post', likeCount: 1},
        {id: v1(), message: 'Hey ho lets go', likeCount: 1}
    ],
    profile: null,
    status: '',
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
        case 'SET_STATUS':
            return {...state, status: action.status}
        default :
            return state
    }
}

//ACs


export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewTextActionType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

export const setUserProfile = (profile: ProfilePageType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS',
        status
    } as const
}

//THUNK

export const getUserProfile = (userID: string) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    usersAPI.getProfile(userID)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userID: string) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    profileAPI.getStatus(userID)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(setStatus(status))
            }
        })
}