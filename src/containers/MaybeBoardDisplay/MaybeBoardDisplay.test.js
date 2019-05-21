import { MaybeBoardDisplay, mapStateToProps } from 'containers/MaybeBoardDisplay/MaybeBoardDisplay'
import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MaybeBoardDisplay', () => {

    const dummyCard = {name:"dummy", image_uris:{small:"https://via.placeholder.com/300"}}
    const mockCards = [dummyCard]

    test('mapStateToProps', () => {
        const mockCards = [{name: "opt"}]
        const mockState = {maybeBoard: {cards: mockCards}}

        expect(mapStateToProps(mockState)).toEqual({ cards: [ { name: 'opt' } ] })
    })

    test('rendering cards correctly', () => {
        const tree = renderer
            .create(<MaybeBoardDisplay cards={mockCards}  />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })


})