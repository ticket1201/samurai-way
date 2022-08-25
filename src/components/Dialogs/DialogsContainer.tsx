import {
    sendMessageActionCreator,
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {ComponentType} from 'react';

type mapDispatchToPropsType = {
    onSendMessage: (text:string) => void
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
        onSendMessage: (text:string) => {
            dispatch(sendMessageActionCreator(text))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

