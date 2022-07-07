import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import { StoreContext } from '../../../StoreContext';



export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostActionCreator(state.profilePage.messageForNewPost))
                    }

                    const newTextChangeHandler = (newText: string) => {
                        store.dispatch(updateNewPostTextActionCreator(newText))
                    }
                    return (
                        <MyPosts updateNewPostText={newTextChangeHandler} addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newMessage={state.profilePage.messageForNewPost}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}