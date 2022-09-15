import React from 'react';
import s from './Message.module.scss'

type MessagePropsType = {
    message: string
    time: string
}

export const Message = ({message, time}:MessagePropsType) => {
    return (
        <div className={s.message}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="avatar"/>
            <p className={s.text}>{message}</p>
            <p className={s.time}>{time}</p>
        </div>
    );
};


