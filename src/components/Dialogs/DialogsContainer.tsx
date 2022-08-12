import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStatType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type mapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    onSendMessage: () => void
}

export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state:AppStatType) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

