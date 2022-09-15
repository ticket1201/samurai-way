import React from 'react';
import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../redux/profile-reducer';
import Contacts from './Contacts/Contacts';


type ProfilePropsType = {
    profile: ProfilePageType | null
    status: string
    updateStatus: (status:string) => void
}

export const Profile = ({profile, status, updateStatus}: ProfilePropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            {profile
                ? <Contacts profileContacts={profile.contacts}/>
                : <div className={styles.plug}> Loading </div>}
            <MyPostsContainer/>
        </div>
    )
}