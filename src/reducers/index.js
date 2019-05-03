import { combineReducers } from 'redux';
import searchDisplay from 'reducers/SearchDisplayReducer';
import deckList from 'reducers/DeckListReducer';
import maybeBoard from 'reducers/MaybeBoardReducer';

export default combineReducers({
    searchDisplay,
    deckList,
    maybeBoard,
})
