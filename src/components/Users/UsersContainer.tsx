import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingInProgress, unfollow,
    UsersType,
    UserType
} from '../../redux/users-reducer';
import {AppStatType} from '../../redux/redux-store';
import React from 'react';
import {Users} from './Users';
import {usersAPI} from '../../api/api';

export type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (isFetching: boolean, userID: string) => void
}
type UsersAPIComponentPropsType = mapDispatchToPropsType & UsersType

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )
    }


    render() {
        return <Users totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize} users={this.props.users} onPageChanged={this.onPageChanged}
                      follow={this.props.follow} unfollow={this.props.unfollow} isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress} toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}/>
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


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingInProgress
})(UsersAPIComponent)


