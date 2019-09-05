import { loadSearchCards } from '../SearchActions';


// TODO: get 100% code coverage in cardactionsjs file
describe('[Unit] loadSearchCards', () => {

    test('returns correct action', () => {
        const dummyCards = { name: "thing in the ice" }; 
        const expectedPayload = { 
            type: 'SEARCH_LOAD_CARDS',
            cards: { name: 'thing in the ice' },
            error: false
        };
        
        expect(loadSearchCards(dummyCards)).toEqual(expectedPayload);
    });
});

describe('[Unit] getCardSearchData', () => {
    
    test('', () => {

    }) 
})