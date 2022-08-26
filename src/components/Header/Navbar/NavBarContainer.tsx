import React from 'react';
import {Nav} from './Navbar';
import {connect} from 'react-redux';
import {
    authType, getAuthUserData, logout,
} from '../../../redux/auth-reducer';
import {AppStateType} from '../../../redux/redux-store';


export type NavBarContainerType = {
    logout: () => void
    getAuthUserData: () => void
} & authType


class NavBarContainer extends React.Component<NavBarContainerType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Nav {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): authType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout})(NavBarContainer)
