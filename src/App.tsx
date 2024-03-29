import React from 'react';
import {connect, Provider} from 'react-redux';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.scss';
import {AppStateType, store} from './redux/redux-store';
import {initializeAppTC} from './redux/app-reducer';
import {Header} from './components/Header/Header';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import UsersContainer from './components/Users/UsersContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return (
                <Preloader onContent={false}/>
            )
        }

        return (
            <>
                <Switch>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <>
                        <div className={'app-wrapper'}>
                            <Header/>
                            <div className={'content'}>
                                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                                <React.Suspense fallback={<Preloader onContent={true}/>}>
                                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                                </React.Suspense>
                            </div>
                        </div>
                    </>
                </Switch>
            </>
        )
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeAppTC: () => void
}
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeAppTC})(App);

const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp