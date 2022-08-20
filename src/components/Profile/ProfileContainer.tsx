import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfilePageType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {compose} from 'redux';

type ProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
} & mapStateToPropsType

type mapStateToPropsType = {
    profile: ProfilePageType | null
}

type PathParamType = {
    userId: string;
}

type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = `2`
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile
    }),
    withRouter,
    withAuthRedirect)(ProfileContainer)