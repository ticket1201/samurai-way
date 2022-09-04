import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

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
                ...action.payload,
            }

        default :
            return state
    }
}

//ACS

export const setAuthUserData = ({id, email, login, isAuth}: authType) => {
    return {
        type: 'SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}

//THUNK
export const getAuthUserData = () => (dispatch: Dispatch<authReducerActionsTypes>) => {
    return authAPI.getAuth()
        .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData({id, email, login, isAuth: true}))
                }
            }
        )
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData({id, email, login, isAuth: true}))
                }
                else {
                    let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: message}))
                }
            }
        )
}
export const logout = () => (dispatch: Dispatch<authReducerActionsTypes>) => {
    authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
                }
            }
        )
}