import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import defaultAvatar from '../../../assets/images/default_avatar.png';
import s from '../users.module.scss'
import {UserType} from '../../../redux/users-reducer';

type UserPropsType = {
    followingInProgress: Array<string>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
} & UserType

export const User = ({
                         name, status, followed, photos, followingInProgress, follow, unfollow, ...props
                     }: UserPropsType) => {
    const history = useHistory();
    return (
        <>
            <div className={s.ImageWrapper}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={photos.large || defaultAvatar} alt="Avatar"/>
                </NavLink>

            </div>
            <div className={s.userInfo}>
                <div className={s.userTitle}>
                    <h3>{name}</h3>
                </div>
                <div className={s.buttonsWrapper}>
                    {followed
                        ? <button disabled={followingInProgress.some(id => id === props.id)}
                                  onClick={() => {
                                      unfollow(props.id)
                                  }}>
                            Unfollow
                        </button>
                        : <button className={s.follow} disabled={followingInProgress.some(id => id === props.id)}
                                  onClick={() => {
                                      follow(props.id)
                                  }}>
                            Follow
                        </button>
                    }
                    <button onClick={() => {
                        history.push(`/profile/${props.id}`);
                    }}>
                        View Profile
                    </button>
                </div>
            </div>

        </>
    )
};

