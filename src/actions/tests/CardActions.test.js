import * as CardActions from 'actions/CardActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const dummyCard = { name: 'thing in the ice' };
const mockStore = configureMockStore([thunk]);

// TODO: get 100% code coverage in cardactionsjs file
describe('[Unit] addToDeckList', () => {

    test('adding to decklist when the card is not in store', async () => {
        
        const initialState = { deckList: { main: [] } };
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToDeckList(dummyCard));
        const actions = store.getActions();
        const expectedPayload = [   
            { type: 'DECKLIST_ADD', card: { name: 'thing in the ice' } },
            { type: 'CARD_COUNT_ADD', name: 'thing in the ice' } 
        ];

        expect(actions).toEqual(expectedPayload);
    });

    test('adding to decklist when card is already inside the store', async () => {
        const initialState = { deckList: { main: [dummyCard]} };
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToDeckList(dummyCard));
        const actions = store.getActions();
        const expectedPayload = [ { type: 'CARD_COUNT_INCREMENT', name: 'thing in the ice' } ];
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] removeFromDeckList', () => {

    test('removing a card from decklist', () => {
        const initialState = { deckList: { main: [dummyCard] } };
        const store = mockStore(initialState);
        store.dispatch(CardActions.removeFromDeckList(dummyCard));

        const actions = store.getActions();
        const expectedPayload = [ 
            { type: 'DECKLIST_REMOVE', card: { name: 'thing in the ice' } },
            { type: 'CARD_COUNT_REMOVE', name: 'thing in the ice' } 
        ];
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] moveToMaybe', () => {

    test('deleting card from maybeBoard', async () => {
        const initialState = { 
            deckList: { main: [dummyCard] },
            maybeBoard: { cards: [] }
        };
        const store = mockStore(initialState);
        store.dispatch(CardActions.moveToMaybe(dummyCard));

        const actions = store.getActions();
        const expectedPayload = [ { type: 'MAYBEBOARD_ADD', card: { name: 'thing in the ice' } },
        { type: 'DECKLIST_REMOVE', card: { name: 'thing in the ice' } },
        { type: 'CARD_COUNT_REMOVE', name: 'thing in the ice' } ];

        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] incrementCardCount', () => {

    test('increment the counter for a card', () => {
        const expectedPayload = { type: CardActions.CARD_COUNT.INCREMENT, name: dummyCard.name }
        expect(CardActions.incrementCardCount(dummyCard)).toEqual(expectedPayload)
    });
});

describe('[Unit] decrementCardCount', () => {

    test('decrement the counter for a card when count is 1', () => {
        const initialState = { cardCount: { counts: {[dummyCard.name]: 1} } };
        const store = mockStore(initialState);
        store.dispatch(CardActions.decrementCardCount(dummyCard));

        const actions = store.getActions();
        const expectedPayload =  [ { type: 'DECKLIST_REMOVE', card: { name: 'thing in the ice' } },
        { type: 'CARD_COUNT_REMOVE', name: 'thing in the ice' } ];
        expect(actions).toEqual(expectedPayload);
    });

    test('decrement the counter for a card when count is greater than 1', () => {
        const initialState = { cardCount: { counts: [{[dummyCard.name]: 4}] } };
        const store = mockStore(initialState);
        store.dispatch(CardActions.decrementCardCount(dummyCard));

        const actions = store.getActions();
        const expectedPayload = [ { type: 'CARD_COUNT_DECREMENT', name: 'thing in the ice' } ];
        expect(actions).toEqual(expectedPayload);
    });


});

describe('[Unit] addToMaybe', () => {

    test('adding new card to maybeBoard', () => {
        const initialState = { 
            maybeBoard: { cards: [] }
        };
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToMaybe(dummyCard));

        const actions = store.getActions();
        const expectedPayload = [ { type: 'MAYBEBOARD_ADD', card: { name: 'thing in the ice' } } ];
        expect(actions).toEqual(expectedPayload);
    });

    test('adding existing card to maybeBoard', () => {
        const initialState = { 
            maybeBoard: { cards: [dummyCard] }
        }
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToMaybe(dummyCard));
        const actions = store.getActions();
        const expectedPayload = [];
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] deleteFromMaybe', () => {

    test('deleting card from maybeBoard', () => {
        const expectedPayload = { 
            type: 'MAYBEBOARD_REMOVE',
            card: { name: 'thing in the ice' } 
        }
        expect(CardActions.deleteFromMaybe(dummyCard)).toEqual(expectedPayload);
    });
});
