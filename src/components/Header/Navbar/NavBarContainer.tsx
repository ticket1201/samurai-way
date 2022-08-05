import React from 'react';
import {Nav} from './Navbar';
import {connect} from 'react-redux';
import {
    authType,
    setAuthUserData,
} from '../../../redux/auth-reducer';
import {AppStatType} from '../../../redux/redux-store';
import {usersAPI} from '../../../api/api';


export type NavBarContainerType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
} & authType


class NavBarContainer extends React.Component<NavBarContainerType> {
    componentDidMount() {
        usersAPI.getAuth()
            .then(response => {
                    if (response.resultCode === 0) {
                        let {id, email, login} = response.data
                        this.props.setAuthUserData(id, email, login)
                    }
                }
            )
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

export default connect(mapStateToProps, {setAuthUserData})(NavBarContainer)
