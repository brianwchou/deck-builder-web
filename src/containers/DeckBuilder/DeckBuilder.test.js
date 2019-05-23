import React from 'react';
import DeckBuilder from './DeckBuilder';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DeckBuilder', () => {

    test('renders correctly', () => {
        const wrapper = shallow(<DeckBuilder />)
        
        expect(wrapper).toMatchSnapshot();
    })
})