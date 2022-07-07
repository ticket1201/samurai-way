import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from './StoreContext';

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

renderEntireTree()

store.subscribe(() => {
    renderEntireTree()
})