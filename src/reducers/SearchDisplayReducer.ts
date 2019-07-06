import { SEARCH } from 'actions/SearchActions';
const initialState = { cards: [] };

export default function searchDisplay(state=initialState, action) {
    switch(action.type) {
        case SEARCH.LOAD:
            return Object.assign({}, state, {
                cards: action.cards
            });
        default:
            return state;
    }
}
