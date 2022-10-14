import {
    sendMessageTC
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppActionsType, AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {ComponentType} from 'react';
import {ThunkDispatch} from 'redux-thunk';

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

const mapDispatchToProps = (dispatch:ThunkDispatch<AppStateType, unknown, AppActionsType>):mapDispatchToPropsType => {
    return{
        onSendMessage: (text:string) => {
            dispatch(sendMessageTC(text))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

