import maybeBoard from 'reducers/MaybeBoardReducer';
import { MAYBEBOARD } from 'actions/CardActions';

describe('[Unit] maybeBoard reducer', () => {

    test('initialize maybeBoard', () => {
        const initialState = { cards: [] };
        const newState = maybeBoard(initialState, {})
        expect(newState).toEqual({ cards: [] })
    });
    
    test('adding to maybeBoard', () => {
        
        const initialState = { cards: [] };
        const action = {type: MAYBEBOARD.ADD, card: { name: 'thoughtseize' }};

        const newState = maybeBoard(initialState, action);
        expect(newState).toEqual({ cards: [{name: 'thoughtseize'}] });
    });

    test('removing from maybeBoard', () => {

        const dummyCard = { name: 'thoughtseize' }
        const initialState = { cards: [dummyCard] };
        const action = {type: MAYBEBOARD.REMOVE, card: dummyCard};

        const newState = maybeBoard(initialState, action);
        expect(newState).toEqual({ cards: [] });
    });

});