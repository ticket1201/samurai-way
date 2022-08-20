import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {ComponentType} from 'react';

type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    onSendMessage: () => void
}

export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state:AppStateType) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return{
        updateNewMessageBody: (text:string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        onSendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

