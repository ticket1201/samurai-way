import React from 'react';
import s from './users.module.scss'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import defaultAvatar from './../../assets/images/default_avatar.png'


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response =>
                this.props.setUsers(response.data.items)
            )
    }

    render() {
        return (
            <div>
                <h2 className={s.pageTitle}>Users</h2>
                <div className={s.usersWrapper}>{
                    this.props.users.map(el => <div key={el.id} className={s.user}>
                        <div className={s.ImageWrapper}>
                            <img src={el.photos.small || defaultAvatar} alt="Avatar"/>
                            {el.followed
                                ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userTitle}>
                                <h3>{el.name}</h3>
                                <p>{el.status}</p>
                            </div>
                            <div className={s.userLocation}>
                                <h3>{`country`},</h3>
                                <h3>{`city`}</h3>
                            </div>
                        </div>
                    </div>)
                }
                </div>
            </div>
        );
    }
}



