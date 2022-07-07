import React from 'react'
import {ActionsTypes, stateType} from './redux/store';

type StoreContextType = {
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

type ProviderType = {
    store: StoreContextType
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as StoreContextType)

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}