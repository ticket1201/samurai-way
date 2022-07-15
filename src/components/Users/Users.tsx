import React from 'react';
import s from './users.module.scss'
import {v1} from 'uuid';
import {UsersPropsType} from './UsersContainer';


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: true,
                fullName: 'Anton M.',
                photoURL: 'https://html5css.ru/howto/img_avatar.png',
                status: 'I am here',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Alexey V.',
                photoURL: 'https://html5css.ru/howto/img_avatar.png',
                status: 'I am engineer',
                location: {city: 'Shenzhen', country: 'China'}
            },
            {
                id: v1(),
                followed: true,
                fullName: 'Gleb D.',
                photoURL: 'https://html5css.ru/howto/img_avatar.png',
                status: 'I am artist',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Olga M.',
                photoURL: 'https://html5css.ru/howto/img_avatar.png',
                status: 'I am 3d character artist',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }

    return (
        <div>
            <h2 className={s.pageTitle}>Users</h2>
            <div className={s.usersWrapper}>{
                props.users.map(el => <div key={el.id} className={s.user}>
                    <div className={s.ImageWrapper}>
                        <img src={el.photoURL} alt="Avatar"/>
                        {el.followed
                            ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(el.id)}>Follow</button>}
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userTitle}>
                            <h3>{el.fullName}</h3>
                            <p>{el.status}</p>
                        </div>
                        <div className={s.userLocation}>
                            <h3>{el.location.country},</h3>
                            <h3>{el.location.city}</h3>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

