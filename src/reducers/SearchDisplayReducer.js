import { SEARCH } from 'actions/SearchActions'
const initialState = { searchDisplayCards: [] }

export default function searchDisplay(state=initialState, action) {
    switch(action.type) {
        case SEARCH.LOAD:
            return Object.assign({}, state, {
                searchDisplayCards: action.cards
            });
        default:
            return state;
    }
}
