import deckList from '../DeckListReducer'

describe('[Unit] deckList reducer', () => {
    test.only("adding a card to decklist should add to main and count", () => {
        let action = {type: 'ADD_TO_DECKLIST', card : {name: 'thing'}};
        const state = {
            main: [],
            cardCount: {}
        }
        let returnedObject = deckList(state, action);
        expect(returnedObject.main[0]).toEqual({name: 'thing'});
        expect(returnedObject.cardCount).toEqual({thing: 1});
    })

    test("some other test", () => {
        
    })

    test("this other test", () => {

    })
})