import React, {ComponentType} from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Redirect, Route, withRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppStateType} from './redux/redux-store';
import {initializeAppTC} from './redux/app-reducer';


type AppPropsType = ReturnType<typeof mapSateToProps> & {
    initializeAppTC: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return (
                <div className={'app-wrapper'} style={{justifyContent:'center'}}>
                    <p>LOADING</p>
                </div>
            )
        }

        return (
            <div className={'app-wrapper'}>
                <Header/>
                <div className={'content'}>
                    <Route path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

const mapSateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapSateToProps, {initializeAppTC})
)(App)
