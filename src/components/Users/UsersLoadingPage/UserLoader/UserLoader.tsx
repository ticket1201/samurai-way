import React from 'react';
import s from '../../users.module.scss';

export const UserLoader = () => {
    return (
        <div className={`${s.user} ${s.blink}`}>
            <div className={s.imgPlug}>
            </div>
            <div className={s.userInfo}>
                <div className={s.userTitlePlug}>
                </div>
                <div className={s.buttonsWrapper}>
                    <div className={s.btnPug}></div>
                    <div className={s.btnPug}></div>
                </div>
            </div>
        </div>

    )
};

