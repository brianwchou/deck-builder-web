import React from 'react'
import DeckTypeSelection from '../../DeckList/DeckTypeSelection';
import renderer from 'react-test-renderer'

describe('DeckTypeSelection', () => {

  test('rendering correctly', () => {
    const tree = renderer
      .create(<DeckTypeSelection />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  
});