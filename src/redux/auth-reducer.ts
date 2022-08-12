import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

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

//ACS

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}

//THUNK
export const getAuthUserData = () => (dispatch:Dispatch<authReducerActionsTypes>) => {
    authAPI.getAuth()
        .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login))
                }
            }
        )
}