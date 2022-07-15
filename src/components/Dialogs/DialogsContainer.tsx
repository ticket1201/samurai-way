import {
    DialogsPageType,
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

export type DialogsPropsType = mapDispatchToPropsType & DialogsPageType

const mapStateToProps = (state:AppStatType):DialogsPageType => {
    return{
        ...state.dialogsPage
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

