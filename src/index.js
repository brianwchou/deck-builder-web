import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { blueTron } from './utility/URLs'
import './index.css'

// what kind of actions do i need here
const searchDisplayReducer = (state={searchDisplayCards: []}, action) => {
    switch(action.type) {
        case 'LOAD_SEARCH_CARDS':
            return Object.assign({}, state, {
                searchDisplayCards: action.cards
            });
        default:
            return state;
    }
}

const deckListReducer = (state={main: []}, action) => {
    switch(action.type) {
        case 'ADD_TO_DECKLIST':
            return Object.assign({}, state, {
                main: [...state.main, action.card] 
            })
        default:
            return state
    }
}


const rootReducer = combineReducers({
    searchDisplay: searchDisplayReducer,
    deckList: deckListReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
