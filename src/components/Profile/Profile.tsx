import React from 'react';
import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../redux/profile-reducer';
import Contacts from './Contacts/Contacts';
import {Redirect} from 'react-router-dom';


type ProfilePropsType = {
    profile: ProfilePageType | null
    auth: boolean
}

export const Profile = (props: ProfilePropsType) => {

    if(!props.auth) return <Redirect to={'/login'}/>

    return (
        <div className={styles.main}>
            <ProfileInfo profile={props.profile}/>
            {props.profile
                ? <Contacts profileContacts={props.profile.contacts}/>
                : <div className={styles.plug}> Loading </div>}
            <MyPostsContainer/>
        </div>
    )
}