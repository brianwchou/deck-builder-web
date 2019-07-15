import deckList from '../DeckListReducer'
import { DECKLIST } from '../../actions/CardActions'

describe('[Unit] deckList reducer', () => {
    /*
        testing strategies for reducer
        we only care about how these work
        inputs should be handled at the action level
        these simply just dump data into the store
    */

    test('intializing state', () => {
        const initialState = { main: [] }
        let newState = deckList(initialState, {});
        expect(newState.main).toEqual([])
    })

    test('adding a card to decklist should add to main', () => {      
        // these are mocks
        let action = { type: DECKLIST.ADD, card: {name: 'thing' }};
        const state = { main: [], }

        // this is the function under test
        let newState = deckList(state, action);
        expect(newState.main[0]).toEqual({name: 'thing'});
    })

    test('removing a card from decklist where the card exists should delete from main', () => {
        const dummyCard = { name: 'Urzas Tower' }  
        const state = { main: [ dummyCard ]}
        const action = {type: DECKLIST.REMOVE, card: dummyCard}

        let newState = deckList(state, action);
        expect(newState.main).toEqual([]);
    })
})