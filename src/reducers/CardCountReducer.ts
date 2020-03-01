import { CARD_COUNT } from '../actions/CardActions'
import { CardCount } from '../common/types';

export default function cardCount(state: CardCount = {}, action: any) {
  switch(action.type) {
    case CARD_COUNT.ADD:
      return Object.assign({}, state, {
        [action.name]: 1
      });
    case CARD_COUNT.INCREMENT:
      return Object.assign({}, state, {
        [action.name]: state[action.name] ? state[action.name] + 1 : 1
      });
    case CARD_COUNT.DECREMENT:
      return Object.assign({}, state, {
        [action.name]: state[action.name] - 1
      });
    case CARD_COUNT.REMOVE:
      return Object.keys(state).reduce((result: CardCount, name) => {
        if (name !== action.name) {
            result[name] = state[name];
        }
        return result
      }, {});
    default: 
      return state;
  }
}