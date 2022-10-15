import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';


type NavPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Nav = ({isAuth, login, logout}:NavPropsType) =>{
    return(
        <nav className={s.nav}>
            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Message</NavLink>
            <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
            {isAuth && <div className={s.account}><span>{login} </span><button onClick={logout}>Logout</button></div>}
        </nav>
    )
}