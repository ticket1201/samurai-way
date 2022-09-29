import React, {ChangeEvent, useState} from 'react';
import defaultAvatar from './../../../assets/images/default_avatar.png'
import s from './ProfileInfo.module.scss'
import {ProfilePageType} from '../../../redux/profile-reducer';
import ProfileInfoLoader from './ProfileInfoLoader/ProfileInfoLoader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileForm from './ProfileForm/ProfileForm';

type ProfileInfoType = {
    profile: ProfilePageType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (data: ProfilePageType) => Promise<any>
    isOwner: boolean
}


export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfileInfoType) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return (
            <ProfileInfoLoader/>
        )
    }

    const isLookingForJobStyle = profile?.lookingForAJob ? s.lookingForJob : '';
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfilePageType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.profileInfo}>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt="Landscape"/>
            <div className={s.profileMain}>
                <img className={`${isLookingForJobStyle} ${s.image}`} src={profile.photos.small || defaultAvatar}
                     alt="Avatar"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div className={s.profileMainDescription}>
                    {!editMode
                        ? <>
                            <h2>{profile.fullName}</h2>
                            <p>Looking for a job: {profile.lookingForAJob || 'no'}</p>
                            <p>{profile.aboutMe}</p>
                            {profile?.lookingForAJob && <p>Ищу работу как: {profile?.lookingForAJobDescription}</p>}
                            <ProfileStatus status={status} updateStatus={updateStatus}/>
                            {isOwner && <button onClick={() => setEditMode(true)}>edit</button>}
                        </>
                        : <ProfileForm initialValues={profile} onSubmit={onSubmit}/>
                    }
                </div>
            </div>

        </div>
    );
};

