const deckListReducerInitialState = {
    main: [],
    cardCount: {}
}

export default function deckList(state=deckListReducerInitialState, action){
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