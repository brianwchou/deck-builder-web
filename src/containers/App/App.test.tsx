import React from 'react';
import App from 'containers/App'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {

    test.only('renders correctly', () => {
        const wrapper = shallow(<App />)
        
        expect(wrapper).toMatchSnapshot();
    })
})