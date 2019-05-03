export default function searchDisplay(state={searchDisplayCards: []}, action) {
    switch(action.type) {
        case 'LOAD_SEARCH_CARDS':
            return Object.assign({}, state, {
                searchDisplayCards: action.cards
            });
        default:
            return state;
    }
}
