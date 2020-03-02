import { combineReducers } from 'redux';
import searchDisplay from '../reducers/SearchDisplayReducer';
import deckList from '../reducers/DeckListReducer';
import maybeBoard from '../reducers/MaybeBoardReducer';
import cardCount from '../reducers/CardCountReducer';

const rootReducer = combineReducers({
  searchDisplay,
  deckList,
  cardCount,
  maybeBoard,
});

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
