import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/helperFuncs';

const initialState: UsersType = {
    users: [],
    pageSize: 6,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: usersACsTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID, 'id', {followed: true})
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID, 'id', {followed: false})
            }
        }
        case 'SET_USERS': {
            return {...state, users: action.payload.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        case 'SET_TOTAL_COUNT': {
            return {...state, totalUserCount: action.payload.count}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }

        default :
            return state
    }
}

// ACTION CREATORS

export const followSuccess = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {userID}
    } as const
}
export const unfollowSuccess = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {userID}
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {currentPage}
    } as const
}
export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        payload: {count}
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}
export const toggleIsFollowingInProgress = (isFetching: boolean, userID: string) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching, userID
    } as const
}

// utility function

const followUnfollowFlow = async (dispatch:Dispatch<usersACsTypes>, userId: string, apiMethod: (userID: string) => any, actionCreator: FollowUnfollowACType) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}

//THUNK

export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch<usersACsTypes>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
export const follow = (userID: string) => async (dispatch: Dispatch<usersACsTypes>) => {
    followUnfollowFlow(dispatch, userID, usersAPI.followUser.bind(usersAPI), followSuccess)
}
export const unfollow = (userID: string) => async (dispatch: Dispatch<usersACsTypes>) => {
    followUnfollowFlow(dispatch, userID, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

//types

type UserPhotosType = {
    small: string
    large: string
}
export type UserType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: UserPhotosType
    status: string
    followed: boolean
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

export type usersACsTypes =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingInProgressACType;

type followACType = ReturnType<typeof followSuccess>
type unfollowACType = ReturnType<typeof unfollowSuccess>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingInProgressACType = ReturnType<typeof toggleIsFollowingInProgress>
type FollowUnfollowACType = typeof followSuccess | typeof unfollowSuccess