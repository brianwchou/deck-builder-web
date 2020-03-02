import deckList from '../DeckListReducer'
import { DECKLIST } from '../../actions/CardActions'
import {  } from '../../common/types';
import { DeckListAction } from '../DeckListReducer';

describe('[Unit] deckList reducer', () => {

    test('intializing state', () => {
        const initialState = []
        let newState = deckList(initialState, {type: undefined, card: undefined});
        expect(newState).toEqual([])
    })

    test('adding a card to decklist should add to main', () => {      
        // these are mocks
        let action = { type: DECKLIST.ADD, card: {name: 'thing' }};
        const state = []

        // this is the function under test
        let newState = deckList(state, action);
        expect(newState[0]).toEqual({name: 'thing'});
    })

    test('removing a card from decklist where the card exists should delete from main', () => {
        const dummyCard = { name: 'Urzas Tower' }  
        const state = [ dummyCard ]
        const action = {type: DECKLIST.REMOVE, card: dummyCard}

        let newState = deckList(state, action);
        expect(newState).toEqual([]);
    })
})