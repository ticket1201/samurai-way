import {Dispatch} from 'redux';
import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {AppThunk} from './redux-store';

export type setUserDataActionCreatorType = ReturnType<typeof setAuthUserData>

export type authReducerActionsTypes = setUserDataActionCreatorType | ReturnType<typeof setCaptcha>;


export type authType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl?: string
}

const initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: ''
}


export const authReducer = (state = initialState, action: authReducerActionsTypes): authType => {
    switch (action.type) {
        case 'SET_CAPTCHA':
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
export const setCaptcha = (captchaUrl: string) => {
    return {
        type: 'SET_CAPTCHA',
        payload: {captchaUrl}
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

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if (response.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
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
export const getCaptchaUrl = () => (dispatch: Dispatch<authReducerActionsTypes>) => {
    securityAPI.getCaptchaUrl()
        .then(response => {
                const captchaUrl = response.data.url
                dispatch(setCaptcha(captchaUrl))
            }
        )
}
