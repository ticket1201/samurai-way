import React from 'react';
import {Nav} from './Navbar';
import axios from 'axios';
import {connect} from 'react-redux';
import {
    authType,
    setAuthUserData,
} from '../../../redux/auth-reducer';
import {AppStatType} from '../../../redux/redux-store';


export type NavBarContainerType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
} & authType


class NavBarContainer extends React.Component<NavBarContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data
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
