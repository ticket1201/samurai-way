import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, profileReducerActionsTypes} from './profile-reducer';
import {dialogsReducer, dialogsReducerActionsTypes} from './dialogs-reducer';
import {usersACsTypes, usersReducer} from './users-reducer';
import {authReducer, authReducerActionsTypes} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {AppActionType, appReducer} from './app-reducer';

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType =
    | AppActionType
    | authReducerActionsTypes
    | dialogsReducerActionsTypes
    | profileReducerActionsTypes
    | usersACsTypes


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;