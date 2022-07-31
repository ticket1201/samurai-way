import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfilePageType, setUserProfile} from '../../redux/profile-reducer';
import {AppStatType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type ProfileContainerPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
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
        if(!userId){
            userId = `2`
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)