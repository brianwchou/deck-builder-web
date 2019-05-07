import { CARD_COUNT } from 'actions/CardActions'
const initialState = { counts: {} };

export default (state=initialState, action) => {
    switch(action.type) {
        case CARD_COUNT.ADD:
            return Object.assign({}, state, {
                counts: Object.assign({}, state.counts, {
                    [action.name]: 1
                })
            })

        case CARD_COUNT.INCREMENT:
            return Object.assign({}, state, {
                counts: Object.assign({}, state.counts, {
                    [action.name]: (state.counts[action.name]) ? state.counts[action.name] + 1 : 1
                })
        })
        case CARD_COUNT.DECREMENT:
            return Object.assign({}, state, {
                counts: Object.assign({}, state.counts, {
                    [action.name]: state.counts[action.name] - 1
                })
            })
        case CARD_COUNT.REMOVE:
            return Object.assign({}, state, {
                counts: Object.keys(state.counts).reduce((result, key) => {
                    if (key !== action.name) {
                        result[key] = state.counts[key];
                    }
                    return result
                }, {})
            })
        default: 
            return state;
    }
}