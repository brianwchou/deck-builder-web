import { SEARCH } from '../actions/SearchActions';

const initialState = { cards: [], error: false };

export default function searchDisplay(state=initialState, action) {
    switch(action.type) {
        case SEARCH.LOAD:
            return Object.assign({}, state, {
                cards: action.cards, error: false
            });
        case SEARCH.ERROR:
            return Object.assign({}, state, {error: true});
        default:
            return state;
    }
}
