import React from 'react'
import DeckTypeSelection from 'containers/DeckList/DeckTypeSelection';
import renderer from 'react-test-renderer'

describe('DeckTypeSelection', () => {
    
    test('rendering correctly', () => {
        const tree = renderer
        .create(<DeckTypeSelection />)
        .toJSON();

    expect(tree).toMatchSnapshot();
    });
});