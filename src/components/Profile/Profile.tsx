import React from 'react';
import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../redux/profile-reducer';
import Contacts from './Contacts/Contacts';


type ProfilePropsType = {
    profile: ProfilePageType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (data: ProfilePageType) => Promise<any>
    isOwner: boolean
}

export const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfilePropsType) => {
    return (
        <div className={styles.main}>
            {
                Object.keys(profile).length &&
                <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}
                             savePhoto={savePhoto}
                             saveProfile={saveProfile}
                />
            }
            {Object.keys(profile).length && <Contacts profile={profile}/>}
            <MyPostsContainer/>
        </div>
    )
}