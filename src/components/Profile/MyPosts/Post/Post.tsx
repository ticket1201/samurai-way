import React from 'react'
import s from './Post.module.scss'

type PostType = {
    name: string
    time: string
    message: string
    likeCount: number
}


export const Post: React.FC<PostType> = ({name, time, message, likeCount}) => {
    return (
        <div className={s.item}>
            <div className={s.title}>
                <img src="https://html5css.ru/howto/img_avatar.png" alt="Profile"/>
                <div className={s.nameTimeWrapper}>
                    <p className={s.name}>{name}</p>
                    <p className={s.time}>{time}</p>
                </div>
            </div>
            <div className={s.message}>
                <p>{message}</p>
            </div>
            <div className={s.likes}>
                <span>Likes: {likeCount}</span>
            </div>

        </div>
    )
}