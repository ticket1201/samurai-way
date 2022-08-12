import React from 'react';
import {Nav} from './Navbar';
import {connect} from 'react-redux';
import {
    authType, getAuthUserData,
} from '../../../redux/auth-reducer';
import {AppStatType} from '../../../redux/redux-store';


export type NavBarContainerType = {
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

const mapStateToProps = (state: AppStatType):authType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(NavBarContainer)
