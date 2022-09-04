import {connect} from 'react-redux';
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    toggleIsFollowingInProgress, unfollow, unfollowSuccess,
    UsersType,
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React, {ComponentType} from 'react';
import {Users} from './Users';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsersArray
} from '../../redux/users-selectors';


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


const mapStateToProps = (state: AppStateType): UsersType => {
    return {
        users: getUsersArray(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const mapDispatchToProps = {
    followSuccess, unfollowSuccess, setCurrentPage,
    toggleIsFollowingInProgress, getUsers, follow, unfollow

}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps))
(UsersAPIComponent)


