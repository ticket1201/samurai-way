import React from 'react'
import styles from './Post.module.scss'

type PostType = {
    message: string
    likeCount: number
}


export const Post: React.FC<PostType> = ({message, likeCount} ) => {
    return (
        <div className={styles.item}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Profile"/>
            <div className={styles.message}>
                <p>{message}</p>
            </div>
            <div className={styles.likes}>
                <span>Likes: {likeCount}</span>
            </div>

        </div>
    )
}