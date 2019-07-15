import { DeckList, mapStateToProps, organizeCards } from '../../DeckList/DeckList'
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

    test('getCardInfo dispatches when button is clicked', () => {
        const mockCards = {name: "zombie", typeLine: "creature"}
        const mockCounts = {zombie: 1}
        const mockMain = [mockCards]
        const onClickSpy = jest.fn()
        const onClickDispatch = jest.fn()
        const wrapper = mount(<DeckList cards={mockCards} main={mockMain} counts={mockCounts} getCardInfo={onClickSpy} dispatch={onClickDispatch} />)

        let container = wrapper.find("div")
        let containerDeep = container.find("div")
        let containerDeeper = containerDeep.find("div")
        let containerButtonIncrement = containerDeeper.find("button").at(0)

        expect(onClickDispatch).not.toHaveBeenCalled();
        containerButtonIncrement.simulate('click');
        expect(onClickDispatch).toHaveBeenCalled();

        let containerButtonDecrement = containerDeeper.find("button").at(1)
        
        onClickDispatch.mockClear();
        expect(onClickDispatch).not.toHaveBeenCalled();
        containerButtonDecrement.simulate('click');
        expect(onClickDispatch).toHaveBeenCalled();

        let containerButtonMaybe = containerDeeper.find("button").at(2)
        
        onClickDispatch.mockClear();
        expect(onClickDispatch).not.toHaveBeenCalled();
        containerButtonMaybe.simulate('click');
        expect(onClickDispatch).toHaveBeenCalled();
    });
});

describe('organizeCards', () => {

    test('sorting creature card', () => {
        const mockCards = [{name: "Norin the Weary", typeLine: "creature"}]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [],
            spells: [],
            planeswalkers: [],
            lands: [],
            creatures: [ { name: 'Norin the Weary', typeLine: 'creature' } ],
            other: [] 
        });
    });

    test('sorting land card', () => {
        const mockCards = [{name: "plains", typeLine: "land"}]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [],
            spells: [],
            planeswalkers: [],
            lands: [ { name: 'plains', typeLine: 'land' } ],
            creatures: [],
            other: [] 
        });
    });

    test('sorting enchantment card', () => {
        const mockCards = [{name: "oblivion ring", typeLine: "enchantment"}]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [ { name: 'oblivion ring', typeLine: 'enchantment' } ],
            spells: [],
            planeswalkers: [],
            lands: [],
            creatures: [],
            other: [] 
        });
    });

    test('sorting artifact card', () => {
        const mockCards = [ { name: "mox opal", typeLine: "artifact" } ]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [ { name: 'mox opal', typeLine: 'artifact' } ],
            enchantments: [],
            spells: [],
            planeswalkers: [],
            lands: [],
            creatures: [],
            other: [] 
        });
    });

    test('sorting planeswalker card', () => {
        const mockCards = [ { name: "Jace Beleren", typeLine: "planeswalker" } ]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [],
            spells: [],
            planeswalkers: [ { name: 'Jace Beleren', typeLine: 'planeswalker' } ],
            lands: [],
            creatures: [],
            other: [] 
        });
    });

    test('sorting card', () => {
        const mockCards = [ { name: "grapeshot", typeLine: "sorcery" } ]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [],
            spells: [ { name: 'grapeshot', typeLine: 'sorcery' } ],
            planeswalkers: [],
            lands: [],
            creatures: [],
            other: [] 
        });
    });

    test('sorting instant card', () => {
        const mockCards = [ { name: "lightning bolt", typeLine: "instant" } ]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [],
            spells: [ { name: 'lightning bolt', typeLine: 'instant' } ],
            planeswalkers: [],
            lands: [],
            creatures: [],
            other: [] 
        });
    });

    test('sorting card with none of the specified categories', () => {
        const mockCards = [ { name: "amazing professor", typeLine: "Bobby-Z" } ]
        
        expect(organizeCards(mockCards)).toEqual({ 
            artifacts: [],
            enchantments: [],
            spells: [],
            planeswalkers: [],
            lands: [],
            creatures: [],
            other: [ { name: "amazing professor", typeLine: "Bobby-Z" } ] 
        });
    });
});