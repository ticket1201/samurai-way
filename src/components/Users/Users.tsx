import React from 'react';
import s from './users.module.scss';
import {UsersType} from '../../redux/users-reducer';
import {Pagination} from './Pagination/Pagination';
import {UserLoadingPage} from './UsersLoadingPage/UserLoadingPage';
import {User} from './User/User';

export type UsersPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
} & UsersType

export const Users = (props: UsersPropsType) => {
    return (
        <div className={s.usersMain}>
            <h2 className={s.pageTitle}>Users</h2>
            <div className={s.usersWrapper}>
                {props.isFetching
                    ? <UserLoadingPage/>
                    : <>
                        {props.users.map(el =>
                            <div key={el.id} className={s.user}>
                                <User {...el} {...props}/>
                            </div>
                        )}
                        <Pagination {...props}/>
                    </>
                }
            </div>
        </div>)
}