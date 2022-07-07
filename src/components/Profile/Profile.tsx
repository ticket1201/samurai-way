import React from 'react';
import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


export const Profile = () => {
    return (
        <div className={styles.main}>
            <ProfileInfo description={'Ava'} imgAlt={'Landscape'}
                         imgUrl={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}/>
            <MyPostsContainer/>

        </div>
    )
}