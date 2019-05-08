import cardCount from 'reducers/CardCountReducer';
import { CARD_COUNT } from 'actions/CardActions';

describe('[Unit] cardCount reducer', () => {

    test('adding a card count', () => {

        const initialState = { counts: {} };
        const action = {type: CARD_COUNT.ADD, name: 'island'};
        let newState = cardCount(initialState, action);
        expect(newState).toEqual({ counts: { [action.name]: 1 }})
    });

    test('incrementing a card count', () => {

        const initialState = { counts: {thoughtseize: 3}};
        const action = {type: CARD_COUNT.INCREMENT, name: 'thoughtseize'};
        let newState = cardCount(initialState, action);
        expect(newState).toEqual({ counts: { [action.name]: 4 }})
    });

    test('decrementing a card count', () => {

        const initialState = { counts: {regrowth: 2}};
        const action = {type: CARD_COUNT.DECREMENT, name: 'regrowth'};
        let newState = cardCount(initialState, action);
        expect(newState).toEqual({ counts: { [action.name]: 1 }})
    });

    test('removing a card count', () => {
        const initialState = { counts: 
            {
                shock: 1,
                thoughtseize: 2
            }};
        const action = {type: CARD_COUNT.REMOVE, name: 'shock'};
        let newState = cardCount(initialState, action);
        expect(newState).toEqual({ counts: {thoughtseize: 2} })
    });

    test('initialize count', () => {

        const initialState = { counts: {} };
        let newState = cardCount(initialState, {});
        expect(newState).toEqual(initialState)
    }); 

});

    