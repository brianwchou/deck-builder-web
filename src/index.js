import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import App from 'containers/App'
import * as serviceWorker from './serviceWorker'
import { blueTron } from 'utility/URLs'
import './index.css'

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

const deckListReducerInitialState = {
    main: [],
    cardCount: {}
}

const deckListReducer = (state=deckListReducerInitialState, action) => {
    switch(action.type) {
        case 'ADD_TO_DECKLIST':
            return Object.assign({}, state, {
                main: [...state.main, action.card],
                cardCount: Object.assign({}, state.cardCount, {
                    [action.card.name]: 1
                }
            )})
        case 'REMOVE_FROM_DECKLIST':
            return Object.assign({}, state, {
                main: state.main.filter((card) => {
                    return card !== action.card;
                })
            })
        case 'INCREMENT_CARD_COUNT':
            return Object.assign({}, state, {
                cardCount: Object.assign({}, state.cardCount, {
                    [action.name]: (state.cardCount[action.name]) ? state.cardCount[action.name] + 1 : 1
                })
            })
        case 'DECREMENT_CARD_COUNT':
            return Object.assign({}, state, {
                cardCount: Object.assign({}, state.cardCount, {
                    [action.name]: state.cardCount[action.name] - 1
                })
            })
        case 'REMOVE_FROM_CARD_COUNT':
            return Object.assign({}, state, {
                cardCount: Object.keys(state.cardCount).reduce((result, key) => {
                    if (key !== action.name) {
                        result[key] = state.cardCount[key];
                    }
                    return result
                }, {})
            })

        default:
            return state
    }
}

const maybeBoardReducer = (state={cards: []}, action) => {
    switch(action.type) {
        case 'ADD_TO_MAYBEBOARD':
            return Object.assign({}, state, {
                cards: [...state.cards, action.card]
            })
        case 'REMOVE_FROM_MAYBEBOARD':
            return Object.assign({}, state, {
                cards: state.cards.filter((card) => {
                    return card !== action.card;
                })
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    searchDisplay: searchDisplayReducer,
    deckList: deckListReducer,
    maybeBoard: maybeBoardReducer,
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
