import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfilePageType} from '../../redux/profile-reducer';
import {AppStatType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type ProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
} & mapStateToPropsType

type mapStateToPropsType = {
    profile: ProfilePageType | null
    isAuth: boolean
}

type PathParamType = {
    userId: string;
}

type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = `2`
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} auth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStatType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent)