import * as CardActions from '../../actions/CardActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CardInfo } from '../../common/types';

const dummyCardStart: CardInfo = { 
  artist: "",
  cmc: 2,
  color_identity: ["B"],
  colors: ["B"],
  image_uris: {
    small: "",
    normal: "",
    large: "",
    png: "",
    art_crop: "",
    border_crop: ""
  },
  mana_cost: "{1}{B}",
  name: "Cover of Darkness",
  oracle_text: "",
  power: undefined,
  rarity: "rare",
  reserved: false,
  setName: undefined,
  toughness: undefined,
  typeLine: "Enchantment"
};

const dummyCardUnchanged: CardInfo = { 
  artist: "",
  cmc: 2,
  color_identity: ["B"],
  colors: ["B"],
  image_uris: {
    small: "",
    normal: "",
    large: "",
    png: "",
    art_crop: "",
    border_crop: ""
  },
  mana_cost: "{1}{B}",
  name: "Cover of Darkness",
  oracle_text: "",
  power: undefined,
  rarity: "rare",
  reserved: false,
  setName: undefined,
  toughness: undefined,
  typeLine: "Enchantment"
};

const mockStore = configureMockStore([thunk]);

describe('[Unit] addToDeckList', () => {

    test('adding to decklist when the card is not in store', async () => {
        const initialState = { deckList: []};
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToDeckList(dummyCardStart));
        
        const actions = store.getActions();
        const expectedPayload = [   
            { type: 'DECKLIST_ADD', card: dummyCardUnchanged },
            { type: 'CARD_COUNT_ADD', name: 'Cover of Darkness' } 
        ];

        expect(actions).toEqual(expectedPayload);
    });

    test('adding to decklist when card is already inside the store', async () => {
        const initialState = { deckList: [dummyCardStart] };
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToDeckList(dummyCardStart));
       
        const actions = store.getActions();
        const expectedPayload = [ { type: 'CARD_COUNT_INCREMENT', name: dummyCardUnchanged.name } ];
        
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] removeFromDeckList', () => {

    test('removing a card from decklist', () => {
        const initialState = { deckList: [dummyCardStart] };
        const store = mockStore(initialState);
        store.dispatch(CardActions.removeFromDeckList(dummyCardStart));
        
        const actions = store.getActions();
        const expectedPayload = [ 
            { type: 'DECKLIST_REMOVE', card: dummyCardUnchanged },
            { type: 'CARD_COUNT_REMOVE', name: dummyCardUnchanged.name } 
        ];

        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] moveToMaybe', () => {

    test('deleting card from maybeBoard', async () => {
        const initialState = { 
            deckList: [dummyCardStart],
            maybeBoard: { cards: [] }
        };
        const store = mockStore(initialState);
        store.dispatch(CardActions.moveToMaybe(dummyCardStart));

        const actions = store.getActions();
        const expectedPayload = [ { type: 'MAYBEBOARD_ADD', card: dummyCardUnchanged },
          { type: 'DECKLIST_REMOVE', card: dummyCardUnchanged },
          { type: 'CARD_COUNT_REMOVE', name: dummyCardUnchanged.name } ];

        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] incrementCardCount', () => {

    test('increment the counter for a card', () => {
        const expectedPayload = { type: CardActions.CARD_COUNT.INCREMENT, name: dummyCardStart.name }
        
        expect(CardActions.incrementCardCount(dummyCardStart)).toEqual(expectedPayload)
    });
});

describe('[Unit] decrementCardCount', () => {

    test('decrement the counter for a card when count is 1', () => {
        const initialState = { cardCount: { counts: {[dummyCardStart.name]: 1} } };
        const store = mockStore(initialState);
        store.dispatch(CardActions.decrementCardCount(dummyCardStart));

        const actions = store.getActions();
        const expectedPayload =  [ { type: 'CARD_COUNT_DECREMENT', name: dummyCardStart.name } ]
        expect(actions).toEqual(expectedPayload);
    });

    test('decrement the counter for a card when count is greater than 1', () => {
        const initialState = { cardCount: { counts: [{[dummyCardStart.name]: 4}] } };
        const store = mockStore(initialState);
        store.dispatch(CardActions.decrementCardCount(dummyCardStart));

        const actions = store.getActions();
        const expectedPayload = [ { type: 'CARD_COUNT_DECREMENT', name: dummyCardStart.name } ];
        
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] addToMaybe', () => {

    test('adding new card to maybeBoard', () => {
        const initialState = { 
            maybeBoard: { cards: [] }
        };
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToMaybe(dummyCardStart));

        const actions = store.getActions();
        const expectedPayload = [ { type: 'MAYBEBOARD_ADD', card: dummyCardStart } ];
        
        expect(actions).toEqual(expectedPayload);
    });

    test('adding existing card to maybeBoard', () => {
        const initialState = { 
            maybeBoard: { cards: [dummyCardStart] }
        }
        const store = mockStore(initialState);
        store.dispatch(CardActions.addToMaybe(dummyCardStart));
        
        const actions = store.getActions();
        const expectedPayload = [];
        
        expect(actions).toEqual(expectedPayload);
    });
});

describe('[Unit] deleteFromMaybe', () => {

    test('deleting card from maybeBoard', () => {
        const expectedPayload = { 
            type: 'MAYBEBOARD_REMOVE',
            card: dummyCardStart 
        }
        
        expect(CardActions.deleteFromMaybe(dummyCardStart)).toEqual(expectedPayload);
    });
});
