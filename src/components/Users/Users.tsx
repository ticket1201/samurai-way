import React from 'react';
import s from './users.module.scss';
import defaultAvatar from './../../assets/images/default_avatar.png'
import {UsersType} from '../../redux/users-reducer';
import {UserLoader} from './UserLoader/UserLoader';
import {Pagination} from './Pagination/Pagination';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UsersPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
} & UsersType

export const Users = (props: UsersPropsType) => {

    return (
        <>
            <h2 className={s.pageTitle}>Users</h2>
            <div className={s.usersWrapper}>
                {props.isFetching
                    ? <>
                        <UserLoader/>
                        <UserLoader/>
                        <UserLoader/>
                        <UserLoader/>
                        <Pagination pageSize={props.pageSize} onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUserCount={props.totalUserCount}/>
                    </>
                    : <>
                        {
                            props.users.map(el => <div key={el.id} className={s.user}>
                                <div className={s.ImageWrapper}>
                                    <NavLink to={`/profile/${el.id}`}>
                                        <img src={el.photos.small || defaultAvatar} alt="Avatar"/>
                                    </NavLink>
                                    {el.followed
                                        ? <button
                                            onClick={() => {
                                                usersAPI.unfollowUser(el.id)
                                                    .then(response => {
                                                        if (response.resultCode === 0) {
                                                            props.unfollow(el.id)
                                                        }
                                                    })
                                            }}>
                                            Unfollow
                                        </button>
                                        : <button
                                            onClick={() => {
                                                usersAPI.followUser(el.id).then(response => {
                                                        if (response.resultCode === 0) {
                                                            props.follow(el.id)
                                                        }
                                                    }
                                                )
                                            }}>
                                            Follow
                                        </button>}
                                </div>
                                <NavLink className={s.userInfo} to={`/profile/${el.id}`}>
                                    <div className={s.userTitle}>
                                        <h3>{el.name}</h3>
                                        <p>{el.status}</p>
                                    </div>
                                    <div className={s.userLocation}>
                                        <h3>{`country`},</h3>
                                        <h3>{`city`}</h3>
                                    </div>
                                </NavLink>
                            </div>)
                        }
                        <Pagination pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                                    currentPage={props.currentPage} totalUserCount={props.totalUserCount}/>
                    </>
                }
            </div>
        </>
    );
};