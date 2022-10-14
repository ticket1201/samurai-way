import {
    addPostTC,
    PostsType,
} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppActionsType, AppStateType} from '../../../redux/redux-store';
import {ThunkDispatch} from 'redux-thunk';


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

const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>): mapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostTC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)