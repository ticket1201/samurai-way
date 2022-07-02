import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {ActionsTypes, addPostActionCreator, PostsType, updateNewPostTextActionCreator} from '../../../redux/state';


export type MyPostsPropsType = {
    postsState: PostsType
    dispatch: (action:ActionsTypes) => void
    newMessage: string
}




export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.postsState
        .map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newMessage))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea name="" id="" value={props.newMessage} onChange={newTextChangeHandler}></textarea>
                <button onClick={addPost}>Submit</button>
            </div>
            <div className={'posts'}>
                {postsElements}
            </div>
        </div>
    )
}