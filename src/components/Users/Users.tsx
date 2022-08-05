import React from 'react';
import s from './users.module.scss';
import defaultAvatar from './../../assets/images/default_avatar.png'
import {UsersType} from '../../redux/users-reducer';
import {UserLoader} from './UserLoader/UserLoader';
import {Pagination} from './Pagination/Pagination';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

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
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '06a5051c-4a76-4b4c-b1bc-63ff9bd7a4be'
                                                    }
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unfollow(el.id)
                                                        }
                                                    })
                                            }}>
                                            Unfollow
                                        </button>
                                        : <button
                                            onClick={() => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},{
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '06a5051c-4a76-4b4c-b1bc-63ff9bd7a4be'
                                                    }
                                                })
                                                    .then(response => {
                                                            if (response.data.resultCode === 0) {
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