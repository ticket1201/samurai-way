export type setUserDataActionCreatorType = ReturnType<typeof setAuthUserData>

export type authReducerActionsTypes = setUserDataActionCreatorType;


export type authType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: authReducerActionsTypes): authType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default :
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}
