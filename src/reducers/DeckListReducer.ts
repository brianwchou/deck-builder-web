import { DECKLIST } from '../actions/CardActions';
import { CardInfo } from '../common/types';

interface DeckListAction {
  type: string,
  card: CardInfo
}

export default function deckList(state: CardInfo[] = [], action: DeckListAction){
  switch(action.type) {
    case DECKLIST.ADD:
      return [...state, action.card]
    case DECKLIST.REMOVE:
      return state.filter((card) => {
        return !Object.is(card, action.card)
      })
    default:
      return state;
  }
}