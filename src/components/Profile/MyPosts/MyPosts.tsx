import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)

    const onAddPost = () => {
        if (props.messageForNewPost) {
            props.addPost()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea name="" id="" value={props.messageForNewPost} onChange={onPostChange}></textarea>
                <button onClick={onAddPost}>Submit</button>
            </div>
            <div className={'posts'}>
                {postsElements}
            </div>
        </div>
    )
}