import React from 'react';
import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../redux/profile-reducer';
import Contacts from './Contacts/Contacts';


type ProfilePropsType = {
    profile: ProfilePageType | null
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo profile={props.profile}/>
            {props.profile?.contacts && <Contacts profileContacts={props.profile.contacts}/>}
            <MyPostsContainer/>
        </div>
    )
}