import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UsersType, UserType} from '../../redux/users-reducer';
import {AppStatType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapDispatchToPropsType & UsersType

const mapStateToProps = (state: AppStatType): UsersType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
