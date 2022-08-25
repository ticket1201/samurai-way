import {
    addPostActionCreator,
    PostsType,
} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type mapStateToPropsType = {
    posts: PostsType
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)