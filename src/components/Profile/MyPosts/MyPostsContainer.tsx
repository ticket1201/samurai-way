import React from 'react';
import {storeType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';



export const MyPostsContainer = (props: { store:storeType }) => {
    let store = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator(store.profilePage.messageForNewPost))
    }

    const newTextChangeHandler = (newText:string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
     <MyPosts updateNewPostText={newTextChangeHandler} addPost={addPost} posts={store.profilePage.posts} newMessage={store.profilePage.messageForNewPost}/>
    )
}