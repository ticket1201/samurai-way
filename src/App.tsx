import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <div className={'content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'}
                       render={() => <Profile/>}/>
                <Route path={'/users'}
                       render={() => <UsersContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
