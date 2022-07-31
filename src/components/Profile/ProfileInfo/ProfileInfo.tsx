import React from 'react';
import defaultAvatar from './../../../assets/images/default_avatar.png'
import s from './ProfileInfo.module.scss'
import {ProfilePageType} from '../../../redux/profile-reducer';
import ProfileInfoLoader from './ProfileInfoLoader/ProfileInfoLoader';

type ProfileInfoType = {
    profile: ProfilePageType | null
}


export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return (
            <ProfileInfoLoader/>
        )
    }

    const isLookingForJobStyle = props.profile?.lookingForAJob ? s.lookingForJob : '';

    return (
        <div className={s.profileInfo}>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt="Landscape"/>
            <div className={s.profileMain}>
                <img className={`${isLookingForJobStyle} ${s.image}`} src={props.profile.photos.small || defaultAvatar} alt="Avatar"/>
                <div className={s.profileMainDescription}>
                    <h2>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                    {props.profile?.lookingForAJob && <p>Ищу работу как: {props.profile?.lookingForAJobDescription}</p>}
                </div>
            </div>

        </div>
    );
};

