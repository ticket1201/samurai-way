import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import './App.scss';
import {AppStateType} from './redux/redux-store';
import {initializeAppTC} from './redux/app-reducer';
import {Header} from './components/Header/Header';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


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
                <Preloader/>
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
