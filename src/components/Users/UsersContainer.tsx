import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow,
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
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type UsersAPIComponentPropsType = mapDispatchToPropsType & UsersType

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }


    render() {
        return <Users {...this.props}
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

export default compose<ComponentType>(connect(mapStateToProps, {
        setCurrentPage,
        getUsers, follow, unfollow
    })
)(UsersContainer)


