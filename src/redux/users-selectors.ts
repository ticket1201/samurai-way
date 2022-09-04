import {AppStateType} from './redux-store';
import {UserType} from './users-reducer';

export const getUsersArray = (state:AppStateType):Array<UserType> => {
    return state.usersPage.users
}
export const getPageSize = (state:AppStateType):number => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state:AppStateType):number => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state:AppStateType):number => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:AppStateType):boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:AppStateType):Array<string> => {
    return state.usersPage.followingInProgress
}