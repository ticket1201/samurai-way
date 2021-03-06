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
}

export type usersACsTypes = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType | toggleIsFetchingACType;
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>


const initialState: UsersType = {
    users: [],
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}


export const usersReducer = (state = initialState, action: usersACsTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case 'SET_USERS': {
            return {...state, users: action.payload.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        case 'SET_TOTAL_COUNT':{
            return {...state, totalUserCount: action.payload.count}
        }
        case 'TOGGLE_IS_FETCHING':{
            return {...state, isFetching: action.isFetching}
        }
        default :
            return state
    }
}


export const follow = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {userID}
    } as const
}
export const unfollow = (userID: string) => {
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

export const toggleIsFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}