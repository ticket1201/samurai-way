import {
    addPostActionCreator,
    PostsType,
    updateNewPostTextActionCreator
} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStatType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type mapStateToPropsType = {
    posts: PostsType
    messageForNewPost: string
}

type mapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: AppStatType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            const action = updateNewPostTextActionCreator(newText)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)