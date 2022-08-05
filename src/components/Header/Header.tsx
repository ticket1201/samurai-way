import React from 'react';
import s from './Header.module.scss';
import NavBarContainer from './Navbar/NavBarContainer';

export const Header = () => {
    return(
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg" alt="logo"/>
            <NavBarContainer/>
        </header>
    )
}