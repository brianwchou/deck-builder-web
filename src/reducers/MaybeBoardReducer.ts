import { MAYBEBOARD } from '../actions/CardActions';
const initialState = { cards: [] };

export default function maybeBoard(state=initialState, action: any) {
  switch(action.type) {
    case MAYBEBOARD.ADD:
      return Object.assign({}, state, {
        cards: [...state.cards, action.card]
      })
    case MAYBEBOARD.REMOVE:
      return Object.assign({}, state, {
        cards: state.cards.filter((card) => {
          return !Object.is(card, action.card);
        })
      })
    default:
      return state;
  }
}