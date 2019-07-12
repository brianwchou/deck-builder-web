import React from 'react'
import DeckListEntries from 'containers/DeckList/DeckListEntries';
import renderer from 'react-test-renderer'
import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DeckListEntries', () => {
    
    test('rendering correctly', () => {
        const mockNoCard = []
        const tree = renderer
        .create(<DeckListEntries data={mockNoCard}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
    });

    test('rendering correctly with cards', () => {
        const mockCards = [{name:"thing in the ice"}]
        const mockType = "creature"
        const mockCounts = {thing_in_the_ice: 2}
        const tree = renderer
        .create(<DeckListEntries data={mockCards} counts={mockCounts} type={mockType} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
    });
});