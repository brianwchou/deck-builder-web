export default function maybeBoard(state={cards: []}, action) {
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