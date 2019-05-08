import { CARD_COUNT } from 'actions/CardActions'
const initialState = { counts: {} };

export default function cardCount(state=initialState, action) {
    switch(action.type) {
        case CARD_COUNT.ADD:
            return Object.assign({}, state, {
                counts: Object.assign({}, state.counts, {
                    [action.name]: 1
                })
            });
        case CARD_COUNT.INCREMENT:
            return Object.assign({}, state, {
                counts: Object.assign({}, state.counts, {
                    [action.name]: (state.counts[action.name]) ? state.counts[action.name] + 1 : 1
                })
        });
        case CARD_COUNT.DECREMENT:
            return Object.assign({}, state, {
                counts: Object.assign({}, state.counts, {
                    [action.name]: state.counts[action.name] - 1
                })
            });
        case CARD_COUNT.REMOVE:
            return Object.assign({}, state, {
                counts: Object.keys(state.counts).reduce((result, name) => {
                    if (name !== action.name) {
                        result[name] = state.counts[name];
                    }
                    return result
                }, {})
            });
        default: 
            return state;
    }
}