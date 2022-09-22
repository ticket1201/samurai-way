import React from 'react'
import ReactDOM from 'react-dom';
import {store} from './redux/redux-store';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

test('renders without crashes', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>, div);
    ReactDOM.unmountComponentAtNode(div)
})