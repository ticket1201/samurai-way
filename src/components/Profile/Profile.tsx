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

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {props.profile
                ? <Contacts profileContacts={props.profile.contacts}/>
                : <div className={styles.plug}> Loading </div>}
            <MyPostsContainer/>
        </div>
    )
}