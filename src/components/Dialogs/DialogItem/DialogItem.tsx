import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.scss';

type DialogPropsType = {
    id: string
    name: string
}


export const DialogItem = ({id, name}: DialogPropsType) => {
    let path = `/dialogs/${id}`;
    let isActive = () => {
        return id.toString() === path[path.length] ? `${s.link} ${s.active}` : `${s.link}`;
    }

    return (
        <div className={s.item}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Avatar"/>
            <NavLink to={path} className={isActive}>
                {name}
            </NavLink>
        </div>
    );
};

