import { DECKLIST } from 'actions/CardActions';
const initialState = { main: [] };

export default function deckList(state=initialState, action){
    switch(action.type) {
        case DECKLIST.ADD:
            return Object.assign({}, state, {
                main: [...state.main, action.card]
            })
        case DECKLIST.REMOVE:
            return Object.assign({}, state, {
                main: state.main.filter((card) => {
                    return !Object.is(card, action.card)
                })
            })
        default:
            return state;
    }
}