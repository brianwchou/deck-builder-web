import { combineReducers } from 'redux';
import searchDisplay from 'reducers/SearchDisplayReducer';
import deckList from 'reducers/DeckListReducer';
import maybeBoard from 'reducers/MaybeBoardReducer';
import cardCount from 'reducers/CardCountReducer';

export default combineReducers({
    searchDisplay,
    deckList,
    cardCount,
    maybeBoard,
})
