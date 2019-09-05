import searchDisplay from '../../reducers/SearchDisplayReducer';
import { SEARCH } from '../../actions/SearchActions';

describe('[Unit] searchDisplay reducer', () => {
    
    test('initialize searchDisplay', () => {
        const initialState = { cards: [], error: false };
        
        let newState = searchDisplay(initialState, {});
        expect(newState).toEqual(initialState)
    }); 

    test('loading into searchDisplay', () => {
        const dummyCards = [{name: 'shock'}, {name: 'counterspell'}, {name: 'thoughtseize'}]
        const initialState = { cards: [], error: false};
        const action = { type: SEARCH.LOAD, 
            cards: dummyCards
        };

        let newState = searchDisplay(initialState, action);
        expect(newState).toEqual({cards: dummyCards, error: false});
    });
});