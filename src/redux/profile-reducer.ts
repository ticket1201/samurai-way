import {v1} from 'uuid';
import {profileAPI, usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {AppStateType, AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

export type PostsType = PostItemStateType[]
export type PostItemStateType = {
    id: string
    message: string
    likeCount: number
}
export type ProfileContactsType = {
    [key: string]: any
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
    profile: ProfilePageType
    status: string
}


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setStatusActionType = ReturnType<typeof setStatus>

export type profileReducerActionsTypes =
    AddPostActionType
    | setUserProfileActionType
    | setStatusActionType
    | ReturnType<typeof deletePostActionCreator>
    | ReturnType<typeof savePhotoSuccess>


const initialState: ProfileStateType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 15},
        {id: v1(), message: 'It\'s my first post', likeCount: 1},
        {id: v1(), message: 'Hey ho lets go', likeCount: 1}
    ],
    profile: {} as ProfilePageType,
    status: '',
}


export const profileReducer = (state = initialState, action: profileReducerActionsTypes): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostItemStateType = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET_USER_PROFILE':
            return {...state, profile: {...action.profile}}
        case 'SET_STATUS':
            return {...state, status: action.status}
        case 'SAVE_PHOTO_SUCCESS':
            return  {...state, profile: {...state.profile, photos: action.photos}}
        case 'DELETE_POST':
            return {...state, posts: state.posts.filter(el => el.id !== action.postId)}
        default :
            return state
    }
}

//ACs


export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
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

export const deletePostActionCreator = (postId: string) => ({
    type: 'DELETE_POST',
    postId
}) as const

export const savePhotoSuccess = (photos: ProfilePhotosType) => ({
    type: 'SAVE_PHOTO_SUCCESS',
    photos
}) as const

//THUNK

export const getUserProfile = (userID: string) => async (dispatch: Dispatch<profileReducerActionsTypes>) => {
    let response = await usersAPI.getProfile(userID)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userID: string) => async (dispatch: Dispatch<profileReducerActionsTypes>) => {
    let response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<profileReducerActionsTypes>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch<profileReducerActionsTypes>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (data: ProfileContactsType):AppThunk<Promise<any>> => async (dispatch, getState:()=>AppStateType) => {
    const userId = getState().auth.id
    let response = await profileAPI.saveProfile(data)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId!.toString()))
    }
    else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('contacts', {_error: message}))
        return Promise.reject()
    }
}