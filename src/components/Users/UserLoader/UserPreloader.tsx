import React from 'react';
import s from '../users.module.scss';

export const UserPreloader = () => {
    return (
        <div className={`${s.user} ${s.blink}`}>
            <div className={s.ImageWrapper}>
                <div className={s.imgPlug}></div>
                <div className={s.btnPlug}></div>
            </div>
            <div className={`${s.userInfo} ${s.userInfoPlug}`}>
                <div className={s.userTitle}>
                    <div className={s.userTitlePlug}></div>
                    <div className={s.userTitlePlug}></div>
                </div>
                <div className={s.userLocation}>
                    <h3 className={s.userLocationPlug}> </h3>
                    <h3 className={s.userLocationPlug}> </h3>
                </div>
            </div>
        </div>

    )
};

