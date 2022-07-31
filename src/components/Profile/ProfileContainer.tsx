import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfilePageType, setUserProfile} from '../../redux/profile-reducer';
import {AppStatType} from '../../redux/redux-store';

type ProfileContainerPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
} & mapStateToPropsType

type mapStateToPropsType = {
    profile: ProfilePageType | null
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStatType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)