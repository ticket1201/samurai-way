import {connect} from 'react-redux';
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    toggleIsFollowingInProgress, unfollow, unfollowSuccess,
    UsersType,
} from '../../redux/users-reducer';
import {AppStatType} from '../../redux/redux-store';
import React from 'react';
import {Users} from './Users';


export type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    followSuccess: (userID: string) => void
    unfollowSuccess: (userID: string) => void
    setCurrentPage: (page: number) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userID: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type UsersAPIComponentPropsType = mapDispatchToPropsType & UsersType

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return <Users {...this.props} {...mapDispatchToProps}
                      onPageChanged={this.onPageChanged}
        />
    }
}


const mapStateToProps = (state: AppStatType): UsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = {
    followSuccess, unfollowSuccess, setCurrentPage,
    toggleIsFollowingInProgress, getUsers, follow, unfollow

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


