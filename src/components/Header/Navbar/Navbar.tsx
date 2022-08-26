import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';


type NavPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Nav = (props:NavPropsType) =>{
    return(
        <nav className={s.nav}>
            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Message</NavLink>
            <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
            <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
            <NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </nav>
    )
}