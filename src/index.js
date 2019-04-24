import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { blueTron } from './utility/URLs'

const searchReducer = (state={urls: []}, action) => {
    switch(action.type) {
        case 'UPDATEurls':
            return {...state,
                urls: [...state.urls, action.url]
            }
        case 'CLEARURLSTORE':
            return {...state,
                urls: []
            }
        default:
            return state
    }
}


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


const deckListReducer = (state={deckListData: []}, action) => {
    switch(action.type) {
        case 'ADD_TO_DECKLIST':
            return Object.assign({}, state, {
                deckListData: [...state.deckListData, action.card] 
            })
        default:
            return state
    }
}


const rootReducer = combineReducers({
    search: searchReducer, 
    searchDisplay: searchDisplayReducer,
    deckList: deckListReducer,
})

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'UPDATE_URL_STORE':
//             return {
//                 ...state,
//                 cardStacks: [
//                     ...state.cardStacks.slice(0, action.stackNo),
//                     [...(state.cardStacks[action.stackNo] || []), action.url],
//                     ...state.cardStacks.slice(action.stackNo + 1)
//                 ]
//             }
//         case 'CLEAR_URL_STORE':
//             return {
//                 ...state,
//                 cardStacks: []
//             }
//         default:
//             return state
//     }
// }

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
