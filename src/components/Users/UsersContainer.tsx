import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, unfollow,
    UsersType,
    UserType
} from '../../redux/users-reducer';
import {AppStatType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';

export type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type UsersAPIComponentPropsType = mapDispatchToPropsType & UsersType

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                }
            )
    }


    render() {
        return <Users totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize} users={this.props.users} onPageChanged={this.onPageChanged}
                      follow={this.props.follow} unfollow={this.props.unfollow} isFetching={this.props.isFetching}/>
    }
}


const mapStateToProps = (state: AppStatType): UsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersAPIComponent)


