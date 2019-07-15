import React from 'react'
import DeckListEntry from '../../DeckList/DeckListEntry';
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DeckListEntry', () => {
    
    test('rendering correctly', () => {
        const mockNoCard = {}
        const tree = renderer
        .create(<DeckListEntry card={mockNoCard} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
    });

    test('clicking a button calls getCardInfo', () => {
        const mockCard = {name: "thing in the ice"}
        const mockTarget = {target: { name: "increment"} }
        const onClickSpy = jest.fn()
        const wrapper = shallow(<DeckListEntry card={mockCard} getCardInfo={onClickSpy} />)

        let container = wrapper.find("div")
        let containerButton = container.find("button").at(0)

        expect(onClickSpy).not.toHaveBeenCalled();
        containerButton.simulate('click', mockTarget);
        expect(onClickSpy).toHaveBeenCalled();
    });
});