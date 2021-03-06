import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './reducers'
import './global.css'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export type AppDispatch = typeof store.dispatch

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
