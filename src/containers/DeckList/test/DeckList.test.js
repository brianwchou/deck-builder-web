import { DeckList, mapStateToProps } from 'containers/DeckList/DeckList'
import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DeckList', () => {

    test('mapStateToProps', () => {
        const mockCards = [{name: "thing in the ice"}]
        const mockCounts = {thing_in_the_ice: 1}
        const mockState = {deckList: {main: mockCards}, cardCount: {counts: mockCounts} }

        expect(mapStateToProps(mockState))
            .toEqual({ main: [ { name: 'thing in the ice' } ], counts: { thing_in_the_ice: 1 } })
    });

    test('rendering no cards correctly', () => {
        const mockMain = []
        const wrapper = shallow(<DeckList main={mockMain} />)

        expect(wrapper).toMatchSnapshot();
    });

    test('rendering with cards correctly', () => {
        const mockMain = [{name: "thing in the ice", typeLine: "creature"}]
        const wrapper = shallow(<DeckList main={mockMain} />)

        expect(wrapper).toMatchSnapshot();
    });
});