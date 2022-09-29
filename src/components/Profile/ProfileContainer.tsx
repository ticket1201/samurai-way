import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
    getStatus,
    getUserProfile,
    ProfilePageType,
    savePhoto, saveProfile,
    updateStatus
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {compose} from 'redux';

type ProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (userId: string) => void
    savePhoto: (file: File) => void
    saveProfile: (data: any) => Promise<any>
} & mapStateToPropsType

type mapStateToPropsType = {
    profile: ProfilePageType
    status: string
    authorizedUserId: number | null
}

type PathParamType = {
    userId: string
}

type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId ?? this.props.authorizedUserId
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerWithRoutePropsType>, prevState: Readonly<mapStateToPropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile, getStatus, updateStatus, savePhoto, saveProfile
    }),
    withRouter,
    withAuthRedirect)(ProfileContainer)