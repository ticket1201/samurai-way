import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root'));


