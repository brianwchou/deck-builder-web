import React from 'react';
import Navbar from '../../components/Navbar'
import renderer from 'react-test-renderer'

describe('Navbar', () => {

    test('renders correctly', () => {
        const tree = renderer
            .create(<Navbar />)
            .toJSON();
         
        expect(tree).toMatchSnapshot();    
    })
})