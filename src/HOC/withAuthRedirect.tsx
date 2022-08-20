import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: ComponentType<T>){
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {
            let {isAuth, ...restProps} = this.props;
            if (!isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}