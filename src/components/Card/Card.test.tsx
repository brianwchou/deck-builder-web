import Card from '../../components/Card';
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Card', () => {

    const mockCardInfo = {name:"dummy", image_uris:{small:"https://via.placeholder.com/300"}}

    test('rendering correctly', () => {
        const tree = renderer
            .create(<Card info={mockCardInfo} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('handleclick works', () => {
        const onClickSpy = jest.fn();
        const wrapper = shallow(<Card info={mockCardInfo} getCardInfo={onClickSpy}  />)
        const mockTarget = {target: { name: "mocked"} }
        let container = wrapper.find("div")
        let containerButton = container.find("button").at(0)
        
        onClickSpy.mockClear();
        expect(onClickSpy).not.toHaveBeenCalled();
        containerButton.simulate('click', mockTarget);
        expect(onClickSpy).toHaveBeenCalled();
    })
})