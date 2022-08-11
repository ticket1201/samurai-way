import React from 'react';
import {NavLink} from 'react-router-dom';
import defaultAvatar from '../../../assets/images/default_avatar.png';
import s from '../users.module.scss'
import {UserType} from '../../../redux/users-reducer';

type UserPropsType = {
    followingInProgress: Array<string>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
} & UserType

export const User = (props: UserPropsType) => {
    return (
        <>
            <div className={s.ImageWrapper}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small || defaultAvatar} alt="Avatar"/>
                </NavLink>
                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.unfollow(props.id)
                              }}>
                        Unfollow
                    </button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.follow(props.id)
                              }}>
                        Follow
                    </button>}
            </div>
            <NavLink className={s.userInfo} to={`/profile/${props.id}`}>
                <div className={s.userTitle}>
                    <h3>{props.name}</h3>
                    <p>{props.status}</p>
                </div>
                <div className={s.userLocation}>
                    <h3>{`country`},</h3>
                    <h3>{`city`}</h3>
                </div>
            </NavLink>

        </>
    )
};

