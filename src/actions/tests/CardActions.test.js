import { addToDeckList, DECKLIST, CARD_COUNT, MAYBEBOARD} from 'actions/CardActions';
import { cardInfo } from 'utility/testData';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { removeFromDeckList, moveToMaybe } from '../CardActions';


// TODO: get 100% code coverage in cardactionsjs file
describe('[Unit] addToDeckList', () => {

    test('adding to decklist when the card is not in store', async () => {
        const mockStore = configureMockStore([thunk]);
        const initialState = { deckList: { main: [] } };
        const store = mockStore(initialState);
        await store.dispatch(addToDeckList({ name: 'thing in the ice' }));
        const actions = store.getActions();
        const expectedPayload = [   
            { type: 'DECKLIST_ADD', card: { name: 'thing in the ice' } },
            { type: 'CARD_COUNT_ADD', name: 'thing in the ice' } 
        ];

        expect(actions).toEqual(expectedPayload);
    });

    test('adding to decklist when card is already inside the store', async () => {
        const mockStore = configureMockStore([thunk]);
        const dummyCard = {name: 'thing in the ice'}
        const initialState = { deckList: { main: [dummyCard]} };
        const store = mockStore(initialState);
        await store.dispatch(addToDeckList(dummyCard));
        const actions = store.getActions();
        const expectedPayload = [ { type: 'CARD_COUNT_INCREMENT', name: 'thing in the ice' } ]
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] removeFromDeckList', () => {

    test('removing a card from decklist', async () => {
        const mockStore = configureMockStore([thunk]);
        const dummyCard = { name: 'arclight phoenix' }
        const initialState = { deckList: { main: [dummyCard] } };
        const store = mockStore(initialState);
        await store.dispatch(removeFromDeckList(dummyCard));

        const actions = store.getActions();
        const expectedPayload = [ 
            { type: 'DECKLIST_REMOVE', card: { name: 'arclight phoenix' } },
            { type: 'CARD_COUNT_REMOVE', name: 'arclight phoenix' } 
        ]
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] moveToMaybe', () => {

    test('deleting card from maybeBoard', async () => {
        // const dispatch = jest.fn()
        
        // await moveToMaybe({ name: 'arclight phoenix' })(dispatch);
        // console.log(dispatch)
        // expect(dispatch).toBeCalledWith({ name: 'arclight phoenix' })
    });
});

describe('[Unit] incrementCardCount', () => {

    test('deleting card from maybeBoard', () => {

    });
});






describe('[Unit] deleteFromMaybe', () => {

    test('deleting card from maybeBoard', () => {

    });
});
