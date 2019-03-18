import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { cardBundle } from './utility/URLs'

const initialState = {
    urls: cardBundle,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_URL_STORE':
            return { ...state,
                urls: [...state.urls, action.url]
            }
        case 'CLEAR_URL_STORE':
            return { ...state,
                urls: []
            }
        default:
            return state
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
