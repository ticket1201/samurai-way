import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import AddPostForm, {AddPostFormDataType} from './AddPostForm/AddPostForm';


export class MyPosts extends React.PureComponent<MyPostsPropsType> {
    render() {

        const postsElements = this.props.posts
            .map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)

        const handleSubmit = ({newPostText}: AddPostFormDataType) => {
            this.props.addPost(newPostText)
        }

        return (
            <div className={s.posts}>
                <h3>My posts</h3>
                <AddPostForm onSubmit={handleSubmit}/>
                <div className={'posts'}>
                    {postsElements}
                </div>
            </div>
        )
    }
}