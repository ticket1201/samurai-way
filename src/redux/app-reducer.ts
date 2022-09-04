import {getAuthUserData} from './auth-reducer';
import {AppThunk} from './redux-store';

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionType) => {
    switch (action.type) {
        case 'SET_INITIALIZE_SUCCESS':
            return{
                ...state,
                initialized: true
            }
        default:
          return state
    }
}


const setInitializedAC = () => ({
    type: 'SET_INITIALIZE_SUCCESS'
} as const)


export const initializeAppTC = ():AppThunk => (dispatch) => {
   let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitializedAC())
    } )
}

export type AppActionType =
    | ReturnType<typeof setInitializedAC>
