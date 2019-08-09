import React from 'react';
import NoMatch from '../components/NoMatch'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom';

describe('NoMatch', () => {

    test('renders correctly', () => {
        const tree = renderer
            .create(<Router><NoMatch /></Router>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
})