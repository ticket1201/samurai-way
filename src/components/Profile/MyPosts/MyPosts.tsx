import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import AddPostForm, {AddPostFormDataType} from './AddPostForm/AddPostForm';


export class MyPosts extends React.PureComponent<MyPostsPropsType> {
    render() {

        const postsElements = this.props.posts
            .map(post => <Post name={post.name} time={post.time} message={post.message} likeCount={post.likeCount} key={post.id}/>)

        const handleSubmit = ({newPostText}: AddPostFormDataType) => {
            this.props.addPost(newPostText)
        }

        return (
            <div className={s.posts}>
                <div className={s.addPostWrapper}>
                    <h3>My posts</h3>
                    <AddPostForm onSubmit={handleSubmit}/>
                </div>
                <div className={s.postsItemsWrapper}>
                    {postsElements}
                </div>
            </div>
        )
    }
}