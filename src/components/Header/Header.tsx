import React from 'react';
import s from './Header.module.scss';
import NavBarContainer from './Navbar/NavBarContainer';

export const Header = () => {
    return(
        <header className={s.header}>
            <div className={s.img}></div>
            <NavBarContainer/>
        </header>
    )
}