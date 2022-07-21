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
}

export type usersACsTypes = followACType | unfollowACType | setUsersACType;
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>


const initialState: UsersType = {
    users: []
}


export const usersReducer = (state = initialState, action: usersACsTypes): UsersType => {
    switch (action.type) {
        case ('FOLLOW'): {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case ('UNFOLLOW'): {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case ('SET_USERS'): {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default :
            return state
    }
}


export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {userID}
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {userID}
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        payload: {users}
    } as const
}
