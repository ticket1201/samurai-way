import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';
import {authType} from '../../../redux/auth-reducer';


export const Nav = (props:authType) =>{
    return(
        <nav className={s.nav}>
            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Message</NavLink>
            <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
            <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
            <NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

        </nav>
    )
}